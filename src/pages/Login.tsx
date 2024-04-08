import { Card, CardHeader, CardBody, Input} from "@nextui-org/react";



export default function () {
    return (
        <>
            <div className="flex h-[100vh]">
                <Card className=" ml-auto mr-[auto] mt-[25vh] mb-[25vh] w-[90vw] bg-[#444444] drop-shadow-xl">
                    <CardHeader className="w-[100%] ">
                        <h1 className="text-center text-success-500 text-5xl font-bold mx-auto" >Connexion</h1>
                    </CardHeader>
                    <CardBody>
                    <div className="w-full flex flex-row flex-wrap gap-4 ">
                        <Input
                            radius="sm"
                            type="text"
                            color="success"
                            label="Matricule"
                            size="lg"
                            placeholder="Entrez votre matricule"
                            className="w-[98%] ml-auto mr-[auto]"
                            classNames={{
                            }}
                            
                            />
                    </div>
                    </CardBody>
                </Card>
            </div>
        </>
    )
}