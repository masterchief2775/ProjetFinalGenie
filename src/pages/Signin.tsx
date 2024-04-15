import { Card, CardHeader, CardBody, CardFooter, Button, Input,Divider} from "@nextui-org/react";



export default function () {
    return (
        <>
            <div className="flex h-[100vh]">
                <Card className=" ml-auto mr-[auto] mt-[10vh] mb-[15vh] w-[90vw] bg-[#444444] drop-shadow-xl">
                    <CardHeader className="w-[100%] mt-auto">
                        <h1 className="text-center text-success-500 text-xl font-bold mx-auto titreLog " >Création de compte</h1>
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
                            className="w-[98%] ml-auto mr-[auto]"
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
                        <Input
                            radius="sm"
                            type="text"
                            color="success"
                            label="Confirmation"
                            size="lg"
                            placeholder="Confirmez votre mot de passe"
                            className="w-[98%] ml-auto mr-[auto] mt-[4vh]"
                        />
                    </div>
                    </CardBody>
                    <Divider className="dividerProfil"></Divider>
                    <CardFooter>
                    <Button color="success" variant="shadow" className="w-[50%] ml-auto mr-[auto] mb-[3vh] btnCon">
                        Confirmer
                    </Button>  
                    </CardFooter>
                </Card>
            </div>
        </>
    )
}