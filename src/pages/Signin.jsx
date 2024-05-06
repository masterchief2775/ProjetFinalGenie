import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { Card, CardHeader, CardBody, CardFooter, Button, Input, Divider } from "@nextui-org/react";
import { validatePassword, getFamilyNames, capitalizeFirstLetter } from '../hooks/validations';
import {EyeFilledIcon} from "./../assets/EyeFilledIcon";
import {EyeSlashFilledIcon} from "./../assets/EyeSlashFilledIcon";
import { REGISTER_MUTATION, REGISTER_EXTRA_MUTATION } from '../hooks/mutations';
import { useMutation } from '@apollo/client';

export default function SignupForm() {
    //Navigation Usage
    const navigate = useNavigate();

    //Fields
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    //Errors
    const [errors, setErrors] = useState({}); // State for storing error messages

    //Password Field Visibility
    const toggleVisibility = () => setIsVisible(!isVisible);
    const [isVisible, setIsVisible] = useState(false);

    //Mutations (Sending Info)
    var [signinMutation, { loading, error }] = useMutation(REGISTER_MUTATION);
    var [signinExtraMutation, { loading, error }] = useMutation(REGISTER_EXTRA_MUTATION);

    //Password Validation
    //validatePassword from validations.jsx

    //Form validation function
    const validateForm = () => {
        const newErrors = {};
        if (!email) {
            newErrors.email = 'L\'adresse email est requise.';
        } else if (!/.*cegeptr\.qc\.ca$/.test(email)) {
            newErrors.email = 'L\'adresse email doit être du domaine du cegep.';
        }

        if (!password) {
            newErrors.password = 'Le mot de passe est requis.';
        } else if (!validatePassword(password)) {
            newErrors.password = 'Doit contenir au moins 8 characteres dont lowercase, uppercase, un numero et un symbol'
        }

        if (!confirmPassword) {
            newErrors.confirmPassword = 'La confirmation du mot de passe est requise.';
        } else if (confirmPassword !== password) {
            newErrors.confirmPassword = 'Les mots de passe ne correspondent pas.';
        }

        if (!username) {
            newErrors.username = 'Le nom d\'utilisateur est requis.';
        }

        setErrors(newErrors);
        console.log(errors)
        return Object.keys(newErrors).length === 0; // Return true if no errors
    };

    // After Validation Do ....
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) return; // Don't submit if validation fails

        try {
            var {data} = await signinMutation({
                variables: {
                    input: {
                        username: username,
                        email: email,
                        password: password,
                    },
                },
            });
            var namePart = email.split('@')[0]
            var nameParts = namePart.split('.');
            var firstName = capitalizeFirstLetter(nameParts[0]);
            var lastName = getFamilyNames(nameParts)
            var isTeacher = !email.includes('@edu'); // True if not edu email
            var userId = data.register.user.id

            var {data} = await signinExtraMutation({
                variables: {
                    id: userId,
                    data: {
                        firstName: firstName,
                        lastName: lastName,
                        isTeacher: isTeacher,
                    },
                },
            });

            navigate('/login');

          } catch (errors) {
            setErrors(errors);
            console.error('Error creating user:', errors);
            console.error('Error creating user:', error);
        }

    };


    return (
        <> 
            <div className="flex h-[100vh]">
                <Card className="ml-auto mr-[auto] mt-[10vh] mb-[15vh] w-[90vw] bg-[#041638] drop-shadow-xl">
                    <CardHeader className="w-[100%] mt-auto">
                        <h1 className="text-center text-primary-500 text-xl font-bold mx-auto titre">
                            Création de compte
                        </h1>
                    </CardHeader>
                    <CardBody className="w-[100%]">
                        <form onSubmit={handleSubmit}>
                            <div className="w-full flex flex-row flex-wrap mt-auto mb-auto">
                                <Input
                                    radius="sm"
                                    type="email"
                                    color="primary"
                                    label="Email"
                                    size="md"
                                    placeholder="Entrez votre email du cegep"

                                    isRequired
                                    value={email}
                                    isInvalid={errors.email != null}
                                    errorMessage={errors.email}
                                    onChange={(e) => setEmail(e.target.value)}

                                    className="w-[98%] ml-auto mr-[auto] mt-[2vh]"
                                />
                                <Input
                                    radius="sm"
                                    color="primary"
                                    label="Nom d'utilisateur"
                                    size="md"
                                    placeholder="Alternatif à l'email lors de la connection"

                                    isRequired
                                    value={username}
                                    isInvalid={errors.username != null}
                                    errorMessage={errors.username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    type="text"

                                    className="w-[98%] ml-auto mr-[auto] mt-[3vh]"
                                />
                                <Input
                                    radius="sm"
                                    color="primary"
                                    label="Mot de passe"
                                    size="md"
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

                                    className="w-[98%] ml-auto mr-[auto] mt-[3vh]"
                                />
                                <Input
                                    radius="sm"
                                    color="primary"
                                    label="Confirmation"
                                    size="md"
                                    placeholder="Confirmez votre mot de passe"

                                    isRequired
                                    value={confirmPassword}
                                    isInvalid={errors.confirmPassword != null}
                                    errorMessage={errors.confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
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

                                    className="w-[98%] ml-auto mr-[auto] mt-[2vh]"
                                />
                            </div>
                        </form>
                    </CardBody>
                    <CardFooter>
                        <div to="/home" className="w-[50%] ml-auto mr-[auto] my-[1vh]">
                            <Button color="primary" variant="shadow" className="w-[80%] ml-[10%] btnCon" onClick={handleSubmit}>
                                Confirmer
                            </Button>
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </>
    );
}
