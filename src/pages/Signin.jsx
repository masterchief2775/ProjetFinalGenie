import { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Button, Input, Divider } from "@nextui-org/react";
import { Link } from 'react-router-dom';
import { EyeFilledIcon } from "./../assets/EyeFilledIcon";
import { EyeSlashFilledIcon } from "./../assets/EyeSlashFilledIcon";
import React from 'react';

export default function SignupForm() {
    //Fields
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    //Errors
    const [errors, setErrors] = useState({}); // State for storing error messages

    //Password Field Visibility
    const toggleVisibility = () => setIsVisible(!isVisible);
    const [isVisible, setIsVisible] = React.useState(false);

    //Password Validation
    const validatePassword = (password) => {
        const hasLowercase = /[a-z]/.test(password);
        const hasUppercase = /[A-Z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSymbol = /[^\w\s]/.test(password);
        const minLength = 8; // Adjust minimum password length as needed

        return (
            hasLowercase &&
            hasUppercase &&
            hasNumber &&
            hasSymbol &&
            password.length >= minLength
        );
    };

    //Form validation function
    const validateForm = () => {
        const newErrors = {};
        if (!email) {
            newErrors.email = 'L\'adresse email est requise.';
        } else if (!/.*\.cegeptr\.qc\.ca$/.test(email)) {
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
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!validateForm()) return; // Don't submit if validation fails

        // Handle form submission logic here (e.g., call your mutation)
        console.log('Submitting registration:', {
            email,
            password,
        }); // Replace with your mutation call and error handling
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
