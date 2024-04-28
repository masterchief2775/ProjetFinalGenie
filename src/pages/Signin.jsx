import { Card, CardHeader, CardBody, CardFooter, Button, Input,Divider} from "@nextui-org/react";
import { Link } from 'react-router-dom'


export default function () {
    return (
        <>
            <div className="flex h-[100vh]">
                <Card className=" ml-auto mr-[auto] mt-[10vh] mb-[15vh] w-[90vw] bg-[#444444] drop-shadow-xl">
                    <CardHeader className="w-[100%] mt-auto">
                        <h1 className="text-center text-success-500 text-xl font-bold mx-auto titre " >Création de compte</h1>
                    </CardHeader>
                    <CardBody className="w-[100%]">
                    <div className="w-full flex flex-row flex-wrap mt-auto mb-auto">
                        <Input
                            radius="sm"
                            type="text"
                            color="success"
                            label="Matricule"
                            size="md"
                            placeholder="Entrez votre matricule"
                            className="w-[98%] ml-auto mr-[auto]"
                        />
                        <Input
                            radius="sm"
                            type="email"
                            color="success"
                            label="Email"
                            size="md"
                            placeholder="Entrez votre email"
                            className="w-[98%] ml-auto mr-[auto]  mt-[2vh]"
                        />
                        <Input
                            radius="sm"
                            type="text"
                            color="success"
                            label="Mot de passe"
                            size="md"
                            placeholder="Entrez votre mot de passe"
                            className="w-[98%] ml-auto mr-[auto] mt-[3vh]"
                        />
                        <Input
                            radius="sm"
                            type="text"
                            color="success"
                            label="Confirmation"
                            size="md"
                            placeholder="Confirmez votre mot de passe"
                            className="w-[98%] ml-auto mr-[auto] mt-[2vh]"
                        />
                    </div>
                    </CardBody>
                    <Divider className="dividerProfil"></Divider>
                    <CardFooter>
                    <Link to="/home" className="w-[50%] ml-auto mr-[auto] my-[1vh]">
                        <Button color="success" variant="shadow" className="w-[100%] btnCon">
                            Confirmer
                        </Button>
                    </Link>
                    </CardFooter>
                </Card>
            </div>
        </>
    )
}