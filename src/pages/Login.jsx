import { Card, CardHeader, CardBody, CardFooter, Button, Input } from "@nextui-org/react";
import { Link, useNavigate } from 'react-router-dom'
import { useMutation } from '@apollo/client';
import { LOGIN_MUTATION } from '../hooks/mutations';
import { useState, useRef } from "react";
import {EyeFilledIcon} from "./../assets/EyeFilledIcon";
import {EyeSlashFilledIcon} from "./../assets/EyeSlashFilledIcon";

export default function Login() {
  //Navigation Usage
  const navigate = useNavigate();

  //Fields
  const [email, setEmail] = useState(''); // Using useState here
  const [password, setPassword] = useState('');

  //Errors
  const [errors, setErrors] = useState({});

  //Password Field Visibility
  const toggleVisibility = () => setIsVisible(!isVisible);
  const [isVisible, setIsVisible] = useState(false);

  //Mutations (Sending Info)
  const [loginMutation, { loading, error }] = useMutation(LOGIN_MUTATION);


  const validateForm = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = 'L\'adresse email est requise.';
    }

    if (!password) {
      newErrors.password = 'Le mot de passe est requis.';
    }

    setErrors(newErrors);
    console.log(errors)
    return Object.keys(newErrors).length === 0;
  }

  //Form validation function
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior 

    if (!validateForm()) return; // Don't submit if validation fails

    try {
      const { data } = await loginMutation({
        variables: {
          input: {
            identifier: email,
            password: password,
            provider: 'local', // Assuming local authentication provider
          },
        },
      });
      console.log(data)
      //If everything ok save jwt & other constant info
      const token = data.login.jwt;
      const userId = data.login.user.id;
      console.log(userId)
      localStorage.setItem('jwtToken', token);
      localStorage.setItem('userId', userId);

      navigate('/');

    } catch (errors) {
      console.error('Error creating user:', errors);
      setErrors({email: "email ou mot de passe invalide", password: "email ou mot de passe invalide"}); // Set error state for display
    }
  };



  return (
    <>
      <form onSubmit={handleSubmit}> <div className="flex h-[100vh]">
        <Card className="ml-auto mr-[auto] mt-[20vh] mb-[20vh] w-[90vw] bg-[#041638] drop-shadow-xl">
          <CardHeader className="w-[100%]">
            <h1 className="text-center text-primary-500 text-4xl font-bold mx-auto titre">Connexion</h1>
          </CardHeader>
          <CardBody className="w-[100%]">
            <div className="w-full flex flex-row flex-wrap mt-auto mb-auto">
              <Input
                radius="sm"
                type="text"
                color="primary"
                label="Email"
                size="lg"
                placeholder="Entrez votre email du cegep ou username"

                isRequired
                value={email}
                isInvalid={errors.email != null}
                errorMessage={errors.email}
                onChange={(e) => setEmail(e.target.value)}

                className="w-[98%] ml-auto mr-[auto] "
              />
              <Input
                radius="sm"
                color="primary"
                label="Mot de passe"
                size="lg"
                placeholder="Entrez votre mot de passe"

                isRequired
                value={password}
                isInvalid={errors.password != null}
                errorMessage={errors.password}
                onChange={(e) => setPassword(e.target.value)}
                endContent={
                  <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                    {isVisible ? (
                      <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                      <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    )}
                  </button>
                }
                type={isVisible ? "text" : "password"}

                className="w-[98%] ml-auto mr-[auto] mt-[4vh]"
              />
            </div>
          </CardBody>
          <CardFooter>
            <Link to="/home" className="w-[50%] mb-[2vh]">
              <Button color="primary" variant="shadow" className="w-[80%] ml-[10%] btnCon" onClick={handleSubmit}>
                Se connecter
              </Button>
            </Link>
            <Link to="/signin" className="w-[50%] mb-[2vh]">
              <Button color="primary" variant="shadow" className="w-[80%] ml-[10%] btnSign">
                S'inscrire
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
      </form>
    </>
  );
}