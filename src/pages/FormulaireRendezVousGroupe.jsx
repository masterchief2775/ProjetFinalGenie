import { Card, CardHeader, CardBody, CardFooter, Button, Input, DatePicker } from "@nextui-org/react";
import { Link } from 'react-router-dom'
import { TimeInput } from "@nextui-org/react";
import { Time } from "@internationalized/date";
import { Select, SelectSection, SelectItem } from "@nextui-org/react";

export default function () {
    return (
        <div className="flex h-[100vh]">
                  <Card className=" ml-auto mr-[auto] mt-[10vh] mb-[14vh] w-[90vw] bg-[#041638] drop-shadow-xl">
                <CardHeader className="w-[100%]">
                    <h1 className="text-center text-primary-500 text-3xl font-bold mx-auto titre" >Rendez-vous groupe</h1>

                </CardHeader>
                <CardBody className="w-[100%]">
                    <div className="w-full flex flex-row flex-wrap mt-auto mb-auto">
                        <Input
                            radius="sm"
                            type="text"
                            color="primary"
                            label="Nom"
                            size="lg"
                            placeholder="Entrez le nom du rendez-vous"
                            className="w-[98%] ml-[auto] mr-[auto] mb-[5%]"
                        />
                        <Input
                            radius="sm"
                            type="text"
                            color="primary"
                            label="Lieux"
                            size="lg"
                            placeholder="Entrez le lieux du rendez-vous"
                            className="w-[98%] ml-[auto] mr-[auto] mb-[5%]"
                        />
                        <DatePicker label="Date du rendez-vous" className="w-[98%] ml-auto mr-[auto] mb-[5%]" radius="sm" color="primary" size="lg"/>
                        <TimeInput label="Heure Début" className="w-[98%] ml-auto mr-[auto] mb-[5%]" defaultValue={new Time(11, 45)} radius="sm" color="primary" size="lg"/>
                        <TimeInput label="Heure Fin" className="w-[98%] ml-auto mr-[auto] mb-[5%]" defaultValue={new Time(11, 45)} radius="sm" color="primary" size="lg"/>
                        <Select
                            label="Matière"
                            placeholder="Choisir une matière"
                            className="w-[98%] ml-[auto] mr-[auto] mb-[5%] max-w-xs"
                            color="primary"
                            radius="sm"
                            size="lg"
                        >
                                <SelectItem key={0} value={"matiere0"} color="primary" className='matiere'>
                                    Math
                                </SelectItem>
                                <SelectItem key={1} value={"matiere1"} color="primary" className='matiere'>
                                    Francais
                                </SelectItem>
                                <SelectItem key={2} value={"matiere2"} color="primary" className='matiere'>
                                    Anglais
                                </SelectItem>
                        </Select>
                    </div>
                </CardBody>
                <CardFooter className="mb-[1vh] flex justify-center">
                    <Link to="/home">
                        <Button color="primary" variant="shadow" className="w-[300px] btnSign">
                            Confirmer
                        </Button>
                    </Link>
                </CardFooter>
            </Card>
        </div>
    )
}