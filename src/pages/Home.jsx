import { Card, CardHeader, CardBody, CardFooter, Divider, Image, Avatar, AvatarGroup, AvatarIcon, Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import {getMeetingsFromUserId } from "../hooks/userFetching";
import { CREATE_NOTIFREVIEW, UPDATE_MEETING_STATUS } from "../hooks/mutations";
import { useMutation } from '@apollo/client';

export default function Accueil() {
    let userId = localStorage.getItem("userId")
    var { loading, error, data } = getMeetingsFromUserId(userId);

    var [createNotifReview, { loading, error }] = useMutation(CREATE_NOTIFREVIEW);
    var [updateMeetingStatus, { loading, error }] = useMutation(UPDATE_MEETING_STATUS);

    if (loading) return <p>Loading user...</p>;
    if (error) return <p>Error fetching user: {error.message}</p>;
    console.log(data)

    var TableauMeetingFromUser = data?.usersPermissionsUser?.data?.attributes?.meetings?.data;
    var TableauMeetingFromTuteur = data?.meetings?.data;

    var TableauMeeting =[
    ...(TableauMeetingFromUser || []), 
    ...(TableauMeetingFromTuteur || []) 
      ];

    const handleTerminerMeeting = async (meetingId, reviewerId, reviewedId) => {
        try {
            var { data } = await createNotifReview({
                variables: {
                    data: {
                        users_permissions_reviewer: reviewerId,
                        users_permissions_revieweds: [reviewedId]
                    }
                }
            });

            var { data } = await updateMeetingStatus({
                variables: {
                    id: meetingId,
                    data: {
                        isFinished: true
                    }
                }
            });

        } catch (error) {
            console.error("Une erreur s'est produite:", error);
        }
    }

    return (
        <div className="ml-auto mr-[auto] w-[100vw] h-[100hv]">

            <div className="header h-[6vh] mb-[5vh]">
                <div className="bg-[#041638] ">
                    <h1 className="py-[2vh] w-[100vw] text-center text-primary-500 text-4xl font-bold titre">Accueil</h1>
                </div>
            </div>

            <div className="overflow-y-scroll overflox-x-hidden h-[90vh] pb-[20vh]">

                {TableauMeeting?.map((meeting) => (
                    <Card className=" ml-auto mr-[auto] w-[90vw] mt-[2vh]">
                        <CardHeader className="flex mt-[1hv]">
                            <div className="relative mr-[1.6rem] ml-[1.3rem] translate-x-[-1.35rem] translate-y-[-1.5rem]">
                                <Avatar className="absolute translate-x-[0.125rem] translate-y-[0.125rem]" src={"http://52.242.29.209:1337" + meeting.attributes.users_permissions_user.data.attributes.picture.data.attributes.url} />
                                <div className="absolute p-[0.15rem] bg-white rounded-full translate-x-[1.8rem] translate-y-[1.5rem]">
                                    <div className="bg-customColor p-[0.7rem] rounded-full">
                                    </div>
                                </div>


                                <div className=" translate-x-[-0.21rem] translate-y-[-0.21rem] absolute border-customColor border-3 rounded-full p-[1.4rem]"></div>
                                <p className="absolute rounded-full translate-x-[2.1rem] translate-y-[1.8rem]  text-tiny text-orange-900 font-bold">+{meeting.attributes.users_permissions_users.data.length}</p>
                            </div>



                            <div className="flex flex-col ml-3">
                                <p className="text-left">{meeting.attributes.name}</p>
                                <p className="text-left text-small text-default-500">{meeting.attributes.users_permissions_user.data.attributes.firstName} {meeting.attributes.users_permissions_user.data.attributes.lastName}</p>
                            </div>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <p>{meeting.attributes.beginningTime.substring(0, 5)} - {meeting.attributes.endTime.substring(0, 5)}</p>
                            <p>{meeting.attributes.date}</p>
                            <p>Lieu: {meeting.attributes.location}</p>
                        </CardBody>
                        <Divider />
                        {meeting.attributes.isFinished === false && (
                            <CardFooter>
                                <Button color="primary" variant="shadow" className="w-[80%] ml-[10%] btnCon" onClick={() => handleTerminerMeeting(meeting.id, userId, meeting.attributes.users_permissions_user.data.id)} >
                                    Terminé
                                </Button>
                            </CardFooter>
                        )}
                    </Card>

                ))}
            </div>
        </div>
    )
    /*
        
            /*LE MODÈLE DE CARD POUR SI ON AJOUTE CONFIRMER UN RENDEZ-VOUS
            <Card className=" ml-auto mr-[auto] w-[90vw] mt-[2vh]">
                <CardHeader className="flex gap-3">
                    <div className="relative mr-[1.6rem] ml-[1.3rem] translate-x-[-1.35rem] translate-y-[-1.5rem]">
                        <Avatar className="absolute translate-x-[0.125rem] translate-y-[0.125rem]" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                        <div className="absolute p-[0.15rem] bg-white rounded-full translate-x-[1.8rem] translate-y-[1.5rem]">
                            <div className="bg-customColor p-[0.7rem] rounded-full">
                            </div>
                        </div>
                        <div className=" translate-x-[-0.21rem] translate-y-[-0.21rem] absolute border-customColor border-3 rounded-full p-[1.4rem]"></div>
                        <p className="absolute rounded-full translate-x-[2.1rem] translate-y-[1.8rem]  text-tiny text-orange-900 font-bold">+5</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-left">Mathematic</p>
                        <p className="text-left text-small text-default-500">Luc Pierre-au-rein</p>
                    </div>
                </CardHeader>
                <Divider />
                <CardBody>
                    <p>3:45 PM - 5:00 PM</p>
                    <p>12/08/2024</p>
                    <p>Lieu: Chez moi</p>
                </CardBody>
                <Divider />
                <CardFooter>
                <Link to="/home" className="w-[35vw] mx-[auto]">
                    <Button color="primary" variant="shadow" className="w-[80%] ml-[10%] btnCon" >
                        Confirmer
                    </Button>
                </Link>
                <Link to="/home" className="w-[35vw] mx-[auto]">
                    <Button color="primary" variant="shadow" className="w-[80%] ml-[10%] btnCon" >
                        Refuser
                    </Button>
                </Link>
                </CardFooter>
            </Card>
        </div>
    </div>*/
}