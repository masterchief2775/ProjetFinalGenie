import { Card, CardHeader, CardBody, CardFooter, Button, Input, DatePicker } from "@nextui-org/react";
import { Link } from 'react-router-dom'
import { TimeInput } from "@nextui-org/react";
import { Time } from "@internationalized/date";

export default function () {
    return (
        <div className="flex h-[100vh]">
            <Card className=" ml-auto mr-[auto] mt-[10vh] mb-[14vh] w-[90vw] bg-[#444444] drop-shadow-xl">
                <CardHeader className="w-[100%]">
                    <h1 className="text-center text-success-500 text-4xl font-bold mx-auto titre" >Rendez-vous</h1>

                </CardHeader>
                <CardBody className="w-[100%]">
                    <div className="w-full flex flex-row flex-wrap mt-auto mb-auto">
                        <Input
                            radius="sm"
                            type="text"
                            color="success"
                            label="Nom"
                            size="lg"
                            placeholder="Entrez le nom du rendez-vous"
                            className="w-[98%] ml-[auto] mr-[auto] mb-[5%]"
                        />
                        <Input
                            radius="sm"
                            type="text"
                            color="success"
                            label="Lieux"
                            size="lg"
                            placeholder="Entrez le lieux du rendez-vous"
                            className="w-[98%] ml-[auto] mr-[auto] mb-[5%]"
                        />
                        <DatePicker label="Date du rendez-vous" className="w-[98%] ml-auto mr-[auto] mb-[5%]" radius="sm" color="success" />
                        <TimeInput label="Heure Début" className="w-[98%] ml-auto mr-[auto] mb-[5%]" defaultValue={new Time(11, 45)} radius="sm" color="success" />
                        <TimeInput label="Heure Fin" className="w-[98%] ml-auto mr-[auto] mb-[5%]" defaultValue={new Time(11, 45)} radius="sm" color="success" />
                        <Input
                            radius="sm"
                            type="text"
                            color="success"
                            label="Sujet"
                            size="lg"
                            placeholder="Entrez le sujet du rendez-vous"
                            className="w-[98%] ml-[auto] mr-[auto] mb-[5%]"
                        />
                    </div>
                </CardBody>
                <CardFooter className="mb-[1vh] flex justify-center">
                    <Link to="/home">
                        <Button color="success" variant="shadow" className="w-[300px] btnSign">
                            Confirmer
                        </Button>
                    </Link>
                </CardFooter>
            </Card>
        </div>
    )
}