import { Card, CardHeader, CardBody, CardFooter, Button, Textarea} from "@nextui-org/react";
import HeroiconsStarSolid from '~icons/heroicons/star-solid';
import { Link } from 'react-router-dom'

export default function() {
    let userName = "Mick Ward"
    let infoRencontre = "12/08/2024 3:45 PM"
    let role = "enseigant"

    

    return (
        <>
            <div className="flex h-[100vh] w-[100wv]">
                <Card className=" ml-auto mr-[auto] mt-[15vh] mb-[25vh] w-[90vw] bg-[#444444] drop-shadow-xl">
                    <CardHeader className="w-[90wv] h-[10vh]">
                        <h1 className="text-center text-success-500 text-3xl font-bold mx-auto titre" >Formulaire d'avis</h1>
                    </CardHeader>
                    <CardBody className="overflow-hidden h-[40vh]">
                    <div className="flex flex-col">
                        <h1 className="text-center text-success-500 text-2xl font-bold titre mt-[-2vh]">{userName} ({role})</h1>
                        <h1 className="text-center text-success-500 text-1xl font-bold titre">{infoRencontre}</h1>
                        <div className="flex flex-row mx-auto mt-[2vh]">
                            <a id="1e"><HeroiconsStarSolid className="w-10 h-10 mb-.5 text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500" /></a>
                            <a id="2e"><HeroiconsStarSolid className="w-10 h-10 mb-.5 text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500" /></a>
                            <a id="3e"><HeroiconsStarSolid className="w-10 h-10 mb-.5 text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500" /></a>
                            <a id="4e"><HeroiconsStarSolid className="w-10 h-10 mb-.5 text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500" /></a>
                            <a id="5e"><HeroiconsStarSolid className="w-10 h-10 mb-.5 text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500" /></a>
                        </div>
                        <Textarea
                        label="Commentaire"
                        labelPlacement="inside"
                        placeholder="Entrez votre avis"
                        className="w-[80vw] mt-[2vh] ml-auto mr-auto overflow-hidden"
                        />
                    </div>
                    </CardBody>
                    <CardFooter className="mb-[2vh] w-[90vw] h-[10vh] ml-[auto] mr-auto flex justify-center">
                    <Link to="/home">
                        <Button color="success" variant="shadow" className="w-[40vw] btnEnvoyer">
                            Confirmer
                        </Button>  
                    </Link>
                    </CardFooter>
                </Card>
            </div>
        </>
    )
}