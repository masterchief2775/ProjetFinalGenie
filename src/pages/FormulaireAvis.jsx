import { Card, CardHeader, CardBody, CardFooter, Button, Textarea } from "@nextui-org/react";
import HeroiconsStarSolid from '~icons/heroicons/star-solid';
import { Link , useLocation, useNavigate, useParams} from 'react-router-dom';
import {getNotifReviewFromId } from "../hooks/userFetching";
import { CREATE_REVIEW, DELETE_NOTIFREVIEW } from "../hooks/mutations";
import { useMutation } from '@apollo/client';
import { useEffect, useState } from "react";


export default function FormulaireAvis() {
    const [reviewStars, setReviewStars] = useState(0);
    const [comment, setComment] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();
    const { loading, error, data } = getNotifReviewFromId(id);

    const [createReview, { loading: createReviewLoading, error: createReviewError }] = useMutation(CREATE_REVIEW);
    const [deleteNotifReview, { loading: deleteNotifLoading, error: deleteNotifError }] = useMutation(DELETE_NOTIFREVIEW);

    useEffect(() => {
        console.log(reviewStars)
    }, [reviewStars]);


    if (loading) return <p>Loading user...</p>;
    if (error) return <p>Error fetching: {error.message}</p>;

    const avis = data.notifReview.data.attributes;
    const nomTuteur = avis.users_permissions_revieweds.data[0].attributes.firstName + " "+ avis.users_permissions_revieweds.data[0].attributes.lastName;
    const nomRencontre = avis.meetingID.data.attributes.name;
    console.log(avis)

   const handlePublierAvis = async () => {
        if(reviewStars != 0){
            try {
                console.log("reviewStars: " + reviewStars)
                console.log(comment)
                console.log(localStorage.getItem("userId"))
                console.log(avis.users_permissions_revieweds.data[0].id)
                var {data} = await createReview({
                    variables: {
                        data: {
                            review: parseInt(reviewStars),
                            comment: comment,
                            reviewer: localStorage.getItem("userId"),
                            reviewed: avis.users_permissions_revieweds.data[0].id,
                            publishedAt: new Date()
                        }
                    }
                });
                
                await deleteNotifReview({
                    variables: {
                        id: id
                    }
                });
                
                navigate("/avis")
            } catch (error) {
                console.error(createReviewError)
                console.error(deleteNotifError)
                console.error("Une erreur s'est produite:", error);
            }
        }
    }

    return (
        <>
            <div className="flex h-[100vh] w-[100wv]">
                <Card className=" ml-auto mr-[auto] mt-[15vh] mb-[25vh] w-[90vw] bg-[#041638] drop-shadow-xl">
                    <CardHeader className="w-[90wv] h-[10vh]">
                        <h1 className="text-center text-primary text-3xl font-bold mx-auto titre" >Formulaire d'avis</h1>
                    </CardHeader>
                    <CardBody className="overflow-hidden h-[40vh]">
                        <div className="flex flex-col">
                            <h1 className="text-center text-primary text-2xl font-bold titre mt-[-2vh]">{nomTuteur}</h1>
                            <h1 className="text-center text-primary text-1xl font-bold titre">{nomRencontre}</h1>
                            <div className="flex flex-row mx-auto mt-[2vh]">
                                <a id="1" onClick={(e) => setReviewStars(e.currentTarget.id)}><HeroiconsStarSolid className={reviewStars >= 1 ? "w-10 h-10 mb-.5 text-primary-300" : "w-10 h-10 mb-.5 text-primary-700"}/></a>
                                <a id="2" onClick={(e) => setReviewStars(e.currentTarget.id)}><HeroiconsStarSolid className={reviewStars >= 2 ? "w-10 h-10 mb-.5 text-primary-300" : "w-10 h-10 mb-.5 text-primary-700"} /></a>
                                <a id="3" onClick={(e) => setReviewStars(e.currentTarget.id)}><HeroiconsStarSolid className={reviewStars >= 3 ? "w-10 h-10 mb-.5 text-primary-300" : "w-10 h-10 mb-.5 text-primary-700"} /></a>
                                <a id="4" onClick={(e) => setReviewStars(e.currentTarget.id)}><HeroiconsStarSolid className={reviewStars >= 4 ? "w-10 h-10 mb-.5 text-primary-300" : "w-10 h-10 mb-.5 text-primary-700"} /></a>
                                <a id="5" onClick={(e) => setReviewStars(e.currentTarget.id)}><HeroiconsStarSolid className={reviewStars >= 5 ? "w-10 h-10 mb-.5 text-primary-300" : "w-10 h-10 mb-.5 text-primary-700"} /></a>
                            </div>
                            <Textarea
                                id="commentaire"
                                label="Commentaire"
                                labelPlacement="inside"
                                placeholder="Entrez votre avis"
                                className="w-[80vw] mt-[2vh] ml-auto mr-auto overflow-hidden"
                                onChange={(e) => setComment(e.target.value)}
                            />
                        </div>
                    </CardBody>
                    <CardFooter className="mb-[2vh] w-[90vw] h-[10vh] ml-[auto] mr-auto flex justify-center">
                            <Button color="primary" variant="shadow" className="w-[40vw] btnEnvoyer" onClick={handlePublierAvis}>
                                Confirmer
                            </Button>
                    </CardFooter>
                </Card>
            </div>
        </>
    )
}