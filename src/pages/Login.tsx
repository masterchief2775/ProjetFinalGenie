import { Card, CardHeader, CardBody, CardFooter, Button, Input} from "@nextui-org/react";
import { Link } from 'react-router-dom'



export default function () {
    return (
        <>
            <div className="flex h-[100vh]">
                <Card className=" ml-auto mr-[auto] mt-[20vh] mb-[20vh] w-[90vw] bg-[#444444] drop-shadow-xl">
                    <CardHeader className="w-[100%]">
                        <h1 className="text-center text-success-500 text-4xl font-bold mx-auto titre" >Connexion</h1>
                    </CardHeader>
                    <CardBody className="w-[100%]">
                    <div className="w-full flex flex-row flex-wrap mt-auto mb-auto">
                        <Input
                            radius="sm"
                            type="text"
                            color="success"
                            label="Matricule"
                            size="lg"
                            placeholder="Entrez votre matricule"
                            className="w-[98%] ml-auto mr-[auto] "
                        />
                        <Input
                            radius="sm"
                            type="text"
                            color="success"
                            label="Mot de passe"
                            size="lg"
                            placeholder="Entrez votre mot de passe"
                            className="w-[98%] ml-auto mr-[auto] mt-[4vh]"
                        />
                    </div>
                    </CardBody>
                    <CardFooter>
                    <Link to="/home" className="w-[50%] mb-[2vh]">
                        <Button color="success" variant="shadow" className="w-[80%] ml-[10%] btnCon">
                            Se connecter
                        </Button>  
                    </Link>
                    <Link to="/signin" className="w-[50%] mb-[2vh]">
                        <Button color="success" variant="shadow" className="w-[80%] ml-[10%] btnSign">
                            S'inscrire
                        </Button> 
                    </Link>
                    </CardFooter>
                </Card>
            </div>
        </>
    )
}