import { Card, CardHeader, CardBody, CardFooter, Button, Textarea } from "@nextui-org/react";
import HeroiconsStarSolid from '~icons/heroicons/star-solid';
import { Link , useParams} from 'react-router-dom';
import {getNotifReviewFromId } from "../hooks/userFetching";
import { CREATE_REVIEW, DELETE_NOTIFREVIEW } from "../hooks/mutations";
import { useMutation } from '@apollo/client';


export default function () {
    var review = 0;
    var commentaire = document.getElementById("commentaire");
    var leCommentaire;

    if (commentaire && commentaire.value.trim() !== "") {
        leCommentaire = commentaire.value;
    } else {
        leCommentaire = "Aucun commentaire";
    }

    var { id } = useParams();
    var { loading, error, data } = getNotifReviewFromId(id);

    var [createReview, { loading, error }] = useMutation(CREATE_REVIEW);
    var [deleteNotifReview, { loading, error }] = useMutation(DELETE_NOTIFREVIEW);

    if (loading) return <p>Loading user...</p>;
    if (error) return <p>Error fetching: {error.message}</p>;

    const avis = data?.notifReview?.data?.attributes;

    let nomTuteur = avis.users_permissions_revieweds.data[0].attributes.firstName + " "+ avis.users_permissions_revieweds.data[0].attributes.lastName;
    let nomRencontre = avis.meetingID.data.attributes.name;

   const handlePublierAvis = async (review, leCommentaire ) => {
        if(review!=0){
            try {
                var { data } = await createReview({
                    variables: {
                        data: {
                            review: review,
                            comment: leCommentaire,
                            reviewer: localStorage.getItem("userId"),
                            reviewed: avis.meetingID.data.id
                        }
                    }
                });
    
                var { data } = await deleteNotifReview({
                    variables: {
                        id: id
                    }
                });
    
            } catch (error) {
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
                                <a id="1e" onChange={review = 1}><HeroiconsStarSolid className="w-10 h-10 mb-.5 text-primary-700 hover:text-primary-300" /></a>
                                <a id="2e" onChange={review = 2}><HeroiconsStarSolid className="w-10 h-10 mb-.5 text-primary-700 hover:text-primary-300" /></a>
                                <a id="3e" onChange={review = 3}><HeroiconsStarSolid className="w-10 h-10 mb-.5 text-primary-700 hover:text-primary-300" /></a>
                                <a id="4e" onChange={review = 4}><HeroiconsStarSolid className="w-10 h-10 mb-.5 text-primary-700 hover:text-primary-300" /></a>
                                <a id="5e" onChange={review = 5}><HeroiconsStarSolid className="w-10 h-10 mb-.5 text-primary-700 hover:text-primary-300" /></a>
                            </div>
                            <Textarea
                                id="commentaire"
                                label="Commentaire"
                                labelPlacement="inside"
                                placeholder="Entrez votre avis"
                                className="w-[80vw] mt-[2vh] ml-auto mr-auto overflow-hidden"
                            />
                        </div>
                    </CardBody>
                    <CardFooter className="mb-[2vh] w-[90vw] h-[10vh] ml-[auto] mr-auto flex justify-center">
                        <Link to="/home">
                            <Button color="primary" variant="shadow" className="w-[40vw] btnEnvoyer" onChange={handlePublierAvis}>
                                Confirmer
                            </Button>
                        </Link>
                    </CardFooter>
                </Card>
            </div>
        </>
    )
}