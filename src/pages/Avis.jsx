import { Card, CardHeader, CardBody, CardFooter, Divider, Button, Avatar, AvatarGroup, AvatarIcon } from "@nextui-org/react";
import { Link, useNavigate } from 'react-router-dom'
import {getNotifReviewFromUserId } from "../hooks/userFetching";

export default function() {
    const navigate = useNavigate();
    let userId = localStorage.getItem("userId")
    var { loading, error, data } = getNotifReviewFromUserId(userId);

    if (loading) return <p>Loading user...</p>;
    if (error) return <p>Error fetching user: {error.message}</p>;

    var TableauNotifAvis = data?.notifReviews?.data;
    return (
        <>
        
            <div className="h-[100vh] overflow-x-hidden">
                <div className="h-[10vh] py-[2vh] bg-[#041638] headerAvis">
                    <h1 className="text-center text-primary-500 text-4xl font-bold titre" >Avis</h1>
                </div>
                <div className="h-auto mt-[12vh] mb-[30vh]">
                {TableauNotifAvis && TableauNotifAvis.length > 0 ? (
                TableauNotifAvis?.map((notifAvis) => (
                    <Card className=" ml-auto mr-[auto] w-[95vw] mt-[2vh] overflow-y: auto;">
                        <CardHeader className="flex gap-3">

                            <div className="relative mr-[1.6rem] ml-[1.3rem] translate-x-[-1.35rem] translate-y-[-1.5rem]">

                                <Avatar className="absolute translate-x-[0.125rem] translate-y-[0.125rem]" src={notifAvis.attributes.users_permissions_revieweds.data[0].attributes?.picture?.data?.attributes?.url != undefined ? "http://52.242.29.209:1337" + notifAvis.attributes.users_permissions_revieweds.data[0].attributes.picture.data.attributes?.url : ""} />

                                <div className="absolute p-[0.15rem] bg-white rounded-full translate-x-[1.8rem] translate-y-[1.5rem]">
                                    <div className="bg-customColor p-[0.7rem] rounded-full">
                                    </div>
                                </div>

                                <div className=" translate-x-[-0.21rem] translate-y-[-0.21rem] absolute border-customColor border-3 rounded-full p-[1.4rem]"></div>
                                <p className="absolute rounded-full translate-x-[2.1rem] translate-y-[1.8rem] text-tiny text-orange-900 font-bold"></p>
                            </div>

                            <div className="flex flex-col">
                            <p className="text-left">{notifAvis.attributes.users_permissions_revieweds.data[0].attributes?.firstName + " " + notifAvis.attributes.users_permissions_revieweds.data[0].attributes?.lastName}</p>
                            <p className="text-left text-small text-default-500">{notifAvis.attributes.meetingID.data.attributes.name}</p>
                            </div>
                        </CardHeader>
                        <Divider />
                        <CardBody >
                            <div className="flex">
                                <p className="my-auto">{notifAvis.attributes.meetingID.data.attributes.date} {notifAvis.attributes.meetingID.data.attributes.beginningTime}</p>
                                <Link to={"/FormulaireAvis/" + notifAvis.id}>
                                    <Button color="primary" value={notifAvis.id} variant="shadow" className="w-[30vw] btnEnvoyer ml-[5vw]">
                                        Évaluer
                                    </Button>
                                </Link>
                            </div>
                        </CardBody>
                    </Card>
                ))):(
                    <div className="text-center text-primary-200 text-4xl font-bold mt-[20vh]">Aucune notification d'avis disponible.</div>
                )}
                </div>
            </div>
        </>
    )
}