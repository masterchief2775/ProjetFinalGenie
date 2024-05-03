import { Card, CardHeader, CardBody, CardFooter, Button, Input } from "@nextui-org/react";
import { Link, useNavigate } from 'react-router-dom'
import { useMutation } from '@apollo/client';
import { LOGIN_MUTATION } from '../hooks/mutations';
import { useState, useRef } from "react";

export default function Login() {
  //Navigation Usage
  const navigate = useNavigate();

  //Fields
  const [email, setEmail] = useState(''); // Using useState here
  const [password, setPassword] = useState('');

  //Errors
  const [errors, setErrors] = useState({});

  //Mutations (Sending Info)
  const [loginMutation, { loading, error }] = useMutation(LOGIN_MUTATION);

  //Form validation function
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

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

      //If everything ok save jwt & other constant info
      const token = data.login.jwt;
      const userId = data.login.user.id;

      localStorage.clear();
      localStorage.setItem('jwtToken', token);
      localStorage.setItem('id', userId);

      navigate('/');

    } catch (errors) {
      console.error('Error creating user:', errors);
      setErrors(errors.message); // Set error state for display
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
                  type="text"
                  color="primary"
                  label="Mot de passe"
                  size="lg"
                  placeholder="Entrez votre mot de passe"

                  isRequired
                  value={password}
                  isInvalid={errors.password != null}
                  errorMessage={errors.password}
                  onChange={(e) => setPassword(e.target.value)}

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