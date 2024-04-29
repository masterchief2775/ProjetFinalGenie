import { Card, CardHeader, CardBody, CardFooter, Button, Input } from "@nextui-org/react";
import { Link, useNavigate } from 'react-router-dom'
import { useMutation } from '@apollo/client';
import { LOGIN_MUTATION } from '../hooks/mutations';
import { useState, useRef } from "react";

export default function Login() {
  const [email, setEmail] = useState(''); // Using useState here
  const [password, setPassword] = useState('');
  const [loginError, setError] = useState(null);
  const navigate = useNavigate();
  const formRef = useRef(null); // Declare formRef here

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    const form = formRef.current;
    if (form.checkValidity() === false) {
      e.preventDefault();
      setError('Veuillez remplir tous les champs obligatoires');
      return;
    }

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

      // Handle successful login (e.g., store JWT, redirect to home page)
      const token = data.login.jwt;
      const userId = data.login.user.id;
      localStorage.clear();
      //console.log('Login successful:', data);
      console.log(userId);
      localStorage.setItem('jwtToken', token);
      localStorage.setItem('id', userId);
      
      //console.log('jwtToken: ', localStorage.getItem('jwtToken'));
      navigate('/');
    } catch (error) {
      setError(error.message); // Set error state for display
    }
  };

  const [loginMutation, { loading, error }] = useMutation(LOGIN_MUTATION);

  return (
    <>
      <form ref={formRef} onSubmit={handleLogin}> <div className="flex h-[100vh]">
      <Card className="ml-auto mr-[auto] mt-[20vh] mb-[20vh] w-[90vw] bg-[#444444] drop-shadow-xl">
            <CardHeader className="w-[100%]">
              <h1 className="text-center text-success-500 text-4xl font-bold mx-auto titre">Connexion</h1>
            </CardHeader>
            <CardBody className="w-[100%]">
              <div className="w-full flex flex-row flex-wrap mt-auto mb-auto">
                <Input
                  radius="sm"
                  type="text"
                  color="success"
                  label="Email"
                  size="lg"
                  placeholder="Entrez votre email du cegep ou username"
                  className="w-[98%] ml-auto mr-[auto] "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Input
                  radius="sm"
                  type="text"
                  color="success"
                  label="Mot de passe"
                  size="lg"
                  placeholder="Entrez votre mot de passe"
                  className="w-[98%] ml-auto mr-[auto] mt-[4vh]"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </CardBody>
            <CardFooter>
              <Link to="/home" className="w-[50%] mb-[2vh]">
                <Button color="success" variant="shadow" className="w-[80%] ml-[10%] btnCon" disabled={loading} onClick={handleLogin}>
                  {loading ? 'Chargement...' : 'Se connecter'}
                </Button>
              </Link>
              <Link to="/signin" className="w-[50%] mb-[2vh]">
                <Button color="success" variant="shadow" className="w-[80%] ml-[10%] btnSign">
                  S'inscrire
                </Button>
              </Link>
              {loginError && <p className="text-error">{loginError}</p>} {/* Conditionally render error message */}
            </CardFooter>
          </Card>
        </div>
      </form>
    </>
  );
}