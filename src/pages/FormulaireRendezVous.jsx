import { Card, CardHeader, CardBody, CardFooter, Button, Input, DatePicker, TimeInput } from "@nextui-org/react";
import { Link, useNavigate } from 'react-router-dom'
import { Time } from "@internationalized/date";
import { Select, SelectSection, SelectItem } from "@nextui-org/react";
import { CREATE_MEETING } from '../hooks/mutations';
import { useState } from "react";
import { useMutation } from "@apollo/client";
export default function () {
    //Navigation Usage
    const navigate = useNavigate();

    //Fields
    const [name, setName] = useState(''); // Using useState here
    const [location, setLocation] = useState(''); // Using useState here
    const [beginningTime, setBeginningTime] = useState(''); // Using useState here
    const [endTime, setEndTime] = useState(''); // Using useState here
    const [subject, setSubject] = useState(''); // Using useState here
    const [date, setDate] = useState(''); // Using useState here


    //Errors
    const [errors, setErrors] = useState({});

    //Mutations (Sending Info)
    const [meetingMutation, { loading, error }] = useMutation(CREATE_MEETING);

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior 

        //if (!validateForm()) return; // Don't submit if validation fails

        try {
            const { data } = await meetingMutation({
                variables: {
                    data: {
                        name: name,
                        location: location,
                        beginningTime: beginningTime.toString(),
                        endTime: endTime.toString(),
                        subject: subject.target.value.slice(2),
                        users_permissions_user: 2,
                        users_permissions_users: localStorage.getItem("userId"),
                        date: date.toString(),
                        publishedAt: new Date(),
                    },
                },
            });
            console.log(data)
            navigate('/');

        } catch (errors) {
            console.error('Error creating user:', errors);
            setErrors({ email: "email ou mot de passe invalide", password: "email ou mot de passe invalide" }); // Set error state for display
        }
    };

    return (
        <form onSubmit={handleSubmit}><div className="flex h-[100vh]">
            <Card className=" ml-auto mr-[auto] mt-[10vh] mb-[14vh] w-[90vw] bg-[#041638] drop-shadow-xl">
                <CardHeader className="w-[100%]">
                    <h1 className="text-center text-primary-500 text-3xl font-bold mx-auto titre" >Rendez-vous</h1>

                </CardHeader>
                <CardBody className="w-[100%]">
                    <div className="w-full flex flex-row flex-wrap mt-auto mb-auto">
                        <Input
                            radius="sm"
                            type="text"
                            color="primary"
                            label="Nom"
                            size="lg"
                            placeholder="Entrez le nom du rendez-vous"
                            className="w-[98%] ml-[auto] mr-[auto] mb-[5%]"

                            isRequired
                            value={name}
                            isInvalid={errors.name != null}
                            errorMessage={errors.name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Input
                            radius="sm"
                            type="text"
                            color="primary"
                            label="Lieux"
                            size="lg"
                            placeholder="Entrez le lieux du rendez-vous"
                            className="w-[98%] ml-[auto] mr-[auto] mb-[5%]"

                            isRequired
                            value={location}
                            isInvalid={errors.location != null}
                            errorMessage={errors.location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                        <DatePicker label="Date du rendez-vous" className="w-[98%] ml-auto mr-[auto] mb-[5%]" radius="sm" color="primary" size="lg"
                            isRequired
                            isInvalid={errors.date != null}
                            errorMessage={errors.date}
                            onChange={setDate}

                        />
                        <TimeInput label="Heure Début" className="w-[98%] ml-auto mr-[auto] mb-[5%]" radius="sm" color="primary" size="lg"
                            isRequired
                            onChange={setBeginningTime} />
                        <TimeInput label="Heure Fin" className="w-[98%] ml-auto mr-[auto] mb-[5%]" radius="sm" color="primary" size="lg"
                            isRequired
                            onChange={setEndTime} />
                        <Select
                            label="Matière"
                            placeholder="Choisir une matière"
                            className="w-[98%] ml-[auto] mr-[auto] mb-[5%] max-w-xs"
                            color="primary"
                            radius="sm"
                            size="lg"

                            isRequired
                            value={subject}
                            isInvalid={errors.subject != null}
                            errorMessage={errors.subject}
                            onChange={setSubject}
                        >
                            <SelectItem value="0" name={"Math"} color="primary" className='matiere'>
                                Math
                            </SelectItem>
                            <SelectItem value="1" name={"Francais"} color="primary" className='matiere'>
                                Francais
                            </SelectItem>
                            <SelectItem value="2" name={"Anglais"} color="primary" className='matiere'>
                                Anglais
                            </SelectItem>
                        </Select>
                    </div>
                </CardBody>
                <CardFooter className="mb-[1vh] flex justify-center">
                    <Link to="/home">
                        <Button color="primary" variant="shadow" className="w-[300px] btnSign" onClick={handleSubmit}>
                            Confirmer
                        </Button>
                    </Link>
                </CardFooter>
            </Card>
        </div> </form>
    )
}