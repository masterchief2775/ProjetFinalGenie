import { Card, CardHeader, CardBody, CardFooter, Button, Input, DatePicker } from "@nextui-org/react";
import { Link, useNavigate } from 'react-router-dom'
import { TimeInput } from "@nextui-org/react";
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
            console.log(name)
            console.log(location)
            console.log(beginningTime)
            console.log(endTime)
            console.log(subject)
            console.log(localStorage.getItem("userId"))
            console.log(date)
            const { data } = await meetingMutation({
                variables: {
                    data: {
                        name: name,
                        location: location,
                        beginningTime: beginningTime,
                        endTime: endTime,
                        subject: subject,
                        users_permissions_user: localStorage.getItem("userId"),
                        date: date
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
                        <TimeInput label="Heure Début" className="w-[98%] ml-auto mr-[auto] mb-[5%]" defaultValue={new Time(11, 45)} radius="sm" color="primary" size="lg"
                            isRequired
                            isInvalid={errors.beginningTime != null}
                            errorMessage={errors.beginningTime}
                            onChange={(e) => setBeginningTime(e.target.value)} />
                        <TimeInput label="Heure Fin" className="w-[98%] ml-auto mr-[auto] mb-[5%]" defaultValue={new Time(11, 45)} radius="sm" color="primary" size="lg"
                            isRequired
                            isInvalid={errors.endTime != null}
                            errorMessage={errors.endTime}
                            onChange={(e) => setEndTime(e.target.value)} />
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
                            onChange={(e) => setSubject(e.target.value)}
                        >
                            <SelectItem key={0} value={"matiere0"} color="primary" className='matiere'>
                                Math
                            </SelectItem>
                            <SelectItem key={1} value={"matiere1"} color="primary" className='matiere'>
                                Francais
                            </SelectItem>
                            <SelectItem key={2} value={"matiere2"} color="primary" className='matiere'>
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