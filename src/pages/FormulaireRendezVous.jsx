import { Card, CardHeader, CardBody, CardFooter, Button, Input, DatePicker, TimeInput } from "@nextui-org/react";
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Time } from "@internationalized/date";
import { Select, SelectSection, SelectItem } from "@nextui-org/react";
import { CREATE_MEETING } from '../hooks/mutations';
import { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { useUserDataById } from "../hooks/useUserData";
export default function () {
    //Navigation Usage
    const navigate = useNavigate();
    const { id: userId } = useParams();
    const [subjectId, setSubjectId] = useState(null);
    const { userLoading, userError, userData } = useUserDataById(userId);
    //Fields
    const [name, setName] = useState(''); // Using useState here
    const [location, setLocation] = useState(''); // Using useState here
    const [beginningTime, setBeginningTime] = useState(''); // Using useState here
    const [endTime, setEndTime] = useState(''); // Using useState here
    const [subject, setSubject] = useState(''); // Using useState here
    const [date, setDate] = useState(''); // Using useState here

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const subjectParam = searchParams.get('subject');
        setSubjectId(subjectParam);
    }, []);
    console.log(userId)
    console.log(subjectId)
    //Errors
    const [errors, setErrors] = useState({});

    //Mutations (Sending Info)
    const [meetingMutation, { loading, error }] = useMutation(CREATE_MEETING);

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior 

        //if (!validateForm()) return; // Don't submit if validation fails

        try {
            console.log(subject)
            const { data } = await meetingMutation({
                
                variables: {
                    data: {
                        name: name,
                        location: location,
                        beginningTime: beginningTime.toString(),
                        endTime: endTime.toString(),
                        subject: subject,
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

    if (userLoading) return <p>Loading user...</p>;
    if (userError) return <p>Error fetching user: {userError.message}</p>;
    console.log(userData)
    return (
        <form onSubmit={handleSubmit}><div className="flex h-[100vh]">
            <Card className=" ml-auto mr-[auto] mt-[10vh] mb-[14vh] w-[90vw] bg-[#041638] drop-shadow-xl">
                <CardHeader className="w-[100%] flex-col">
                    <div>
                        <h1 className="text-center text-primary-500 text-3xl font-bold mx-auto titre" >Rendez-vous</h1>
                        <h5 className="text-center text-primary-500 text-1xl font-bold mx-auto">{userData.usersPermissionsUser.data.attributes.firstName + " " + userData.usersPermissionsUser.data.attributes.lastName}</h5>
                    </div>
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
                            defaultSelectedKeys={[subjectId]}
                            onChange={(e) => {setSubject(e.target?.value)}}
                        >
                            {userData.usersPermissionsUser.data.attributes.strengths.data.map((strength, index) => (
                            <SelectItem key={strength.id} color="primary" className='matiere'>
                            {strength.attributes.name}
                            </SelectItem>
                        ))}
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