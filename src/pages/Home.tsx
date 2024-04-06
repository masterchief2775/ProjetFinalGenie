import { Card, CardHeader, CardBody, CardFooter, Divider, Image, Avatar, AvatarGroup, AvatarIcon } from "@nextui-org/react";


export default function () {
    return (
        <>
            <div className='top-4'>
                <Card className=" ml-auto mr-[auto] w-[90vw]">
                    <CardHeader className="flex gap-3">

                        <div className="relative mr-[1.6rem] ml-[1.3rem] translate-x-[-1.35rem] translate-y-[-1.5rem]">

                            <Avatar className="absolute translate-x-[0.125rem] translate-y-[0.125rem]" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />


                            <div className="absolute p-[0.15rem] bg-white rounded-full translate-x-[1.8rem] translate-y-[1.5rem]">
                                <div className="bg-orange-500 p-[0.7rem] rounded-full">
                                </div>
                            </div>


                            <div className=" translate-x-[-0.21rem] translate-y-[-0.21rem] absolute border-orange-500 border-3 rounded-full p-[1.4rem]"></div>
                            <p className="absolute rounded-full translate-x-[2.1rem] translate-y-[1.8rem]  text-tiny text-orange-900 font-bold">+5</p>
                        </div>

                        

                        <div className="flex flex-col">
                            <p className="text-left">Mathematic</p>
                            <p className="text-left text-small text-default-500">Fractal & Logarithm</p>
                        </div>

                    </CardHeader>
                    <Divider />
                    <CardBody>
                        <p>12/08/2024 3:45 PM</p>
                    </CardBody>
                    <Divider />
                    <CardFooter>

                    </CardFooter>
                </Card>
            </div>
        </>
    )
}