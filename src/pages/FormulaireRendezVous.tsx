import { Card, CardHeader, CardBody, CardFooter, Button, Input, DatePicker} from "@nextui-org/react";
import { Link } from 'react-router-dom'

export default function() {
    return (
        <div className="flex h-[100vh]">
        <Card className=" ml-auto mr-[auto] mt-[20vh] mb-[20vh] w-[90vw] bg-[#444444] drop-shadow-xl">
            <CardHeader className="w-[100%]">
                <h1 className="text-center text-success-500 text-4xl font-bold mx-auto titre" >Rendez-vous</h1>
                
            </CardHeader>
            <CardBody className="w-[100%]">
            <div className="w-full flex flex-row flex-wrap mt-auto mb-auto">
                <Input
                    radius="sm"
                    type="text"
                    color="success"
                    label="Lieux"
                    size="lg"
                    placeholder="Entrez le lieux du rendez-vous"
                    className="w-[98%] ml-auto mr-[auto] "
                />
            <DatePicker label="Date du rendez-vous" className="w-[98%] ml-auto mr-[auto]" radius="sm" color="success"/>
            </div>
            </CardBody>
            <CardFooter>
            <Link to="/home">
                <Button color="success" variant="shadow" className="w-[80%] ml-[10%] btnSign">
                    Confirmer
                </Button> 
            </Link>
            </CardFooter>
        </Card>
    </div>
    )
}