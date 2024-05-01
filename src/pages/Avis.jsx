import { Card, CardHeader, CardBody, CardFooter, Divider, Image, Avatar, AvatarGroup, AvatarIcon } from "@nextui-org/react";
import { Link } from 'react-router-dom'

export default function() {
    
    let userName = "Franky";
    let userMatiere = "Math, logique";
    let userPP = "https://i.pravatar.cc/150?u=a042581f4e29026024d"
    let nbrEval = "+2"
    let infoRencontre1 = "12/08/2024 3:45 PM"
    let infoRencontre2 = "29/07/2024 11:00 AM"

    return (
        <>
        
            <div className="h-[100vh] overflow-x-hidden">
                <div className="h-[10vh] py-[2vh] bg-[#041638] headerAvis">
                    <h1 className="text-center text-primary-500 text-4xl font-bold titre" >Avis</h1>
                </div>
                <div className="h-auto mt-[12vh] mb-[30vh]">
                    <Card className=" ml-auto mr-[auto] w-[95vw] mt-[2vh] overflow-y: auto;">
                        <CardHeader className="flex gap-3">

                            <div className="relative mr-[1.6rem] ml-[1.3rem] translate-x-[-1.35rem] translate-y-[-1.5rem]">

                                <Avatar className="absolute translate-x-[0.125rem] translate-y-[0.125rem]" src={userPP} />

                                <div className="absolute p-[0.15rem] bg-white rounded-full translate-x-[1.8rem] translate-y-[1.5rem]">
                                    <div className="bg-orange-500 p-[0.7rem] rounded-full">
                                    </div>
                                </div>

                                <div className=" translate-x-[-0.21rem] translate-y-[-0.21rem] absolute border-orange-500 border-3 rounded-full p-[1.4rem]"></div>
                                <p className="absolute rounded-full translate-x-[2.1rem] translate-y-[1.8rem] text-tiny text-orange-900 font-bold">{nbrEval}</p>
                            </div>

                            <div className="flex flex-col">
                                <p className="text-left">{userName}</p>
                                <p className="text-left text-small text-default-500">{userMatiere}</p>
                            </div>

                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <Link to="/formulaireAvis">
                            <a>{infoRencontre1}</a>
                            </Link>
                            <a>{infoRencontre2}</a>
                        </CardBody>
                    </Card>
                    <Card className=" ml-auto mr-[auto] w-[95vw] mt-[2vh] overflow-y: auto;">
                        <CardHeader className="flex gap-3">

                            <div className="relative mr-[1.6rem] ml-[1.3rem] translate-x-[-1.35rem] translate-y-[-1.5rem]">

                                <Avatar className="absolute translate-x-[0.125rem] translate-y-[0.125rem]" src={userPP} />

                                <div className="absolute p-[0.15rem] bg-white rounded-full translate-x-[1.8rem] translate-y-[1.5rem]">
                                    <div className="bg-orange-500 p-[0.7rem] rounded-full">
                                    </div>
                                </div>

                                <div className=" translate-x-[-0.21rem] translate-y-[-0.21rem] absolute border-orange-500 border-3 rounded-full p-[1.4rem]"></div>
                                <p className="absolute rounded-full translate-x-[2.1rem] translate-y-[1.8rem] text-tiny text-orange-900 font-bold">{nbrEval}</p>
                            </div>

                            <div className="flex flex-col">
                                <p className="text-left">{userName}</p>
                                <p className="text-left text-small text-default-500">{userMatiere}</p>
                            </div>

                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <Link to="/formulaireAvis">
                            <a>{infoRencontre1}</a>
                            </Link>
                            <a>{infoRencontre2}</a>
                        </CardBody>
                    </Card>
                    <Card className=" ml-auto mr-[auto] w-[95vw] mt-[2vh] overflow-y: auto;">
                        <CardHeader className="flex gap-3">

                            <div className="relative mr-[1.6rem] ml-[1.3rem] translate-x-[-1.35rem] translate-y-[-1.5rem]">

                                <Avatar className="absolute translate-x-[0.125rem] translate-y-[0.125rem]" src={userPP} />

                                <div className="absolute p-[0.15rem] bg-white rounded-full translate-x-[1.8rem] translate-y-[1.5rem]">
                                    <div className="bg-orange-500 p-[0.7rem] rounded-full">
                                    </div>
                                </div>

                                <div className=" translate-x-[-0.21rem] translate-y-[-0.21rem] absolute border-orange-500 border-3 rounded-full p-[1.4rem]"></div>
                                <p className="absolute rounded-full translate-x-[2.1rem] translate-y-[1.8rem] text-tiny text-orange-900 font-bold">{nbrEval}</p>
                            </div>

                            <div className="flex flex-col">
                                <p className="text-left">{userName}</p>
                                <p className="text-left text-small text-default-500">{userMatiere}</p>
                            </div>

                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <Link to="/formulaireAvis">
                            <a>{infoRencontre1}</a>
                            </Link>
                            <a>{infoRencontre2}</a>
                        </CardBody>
                    </Card>
                    <Card className=" ml-auto mr-[auto] w-[95vw] mt-[2vh] overflow-y: auto;">
                        <CardHeader className="flex gap-3">

                            <div className="relative mr-[1.6rem] ml-[1.3rem] translate-x-[-1.35rem] translate-y-[-1.5rem]">

                                <Avatar className="absolute translate-x-[0.125rem] translate-y-[0.125rem]" src={userPP} />

                                <div className="absolute p-[0.15rem] bg-white rounded-full translate-x-[1.8rem] translate-y-[1.5rem]">
                                    <div className="bg-orange-500 p-[0.7rem] rounded-full">
                                    </div>
                                </div>

                                <div className=" translate-x-[-0.21rem] translate-y-[-0.21rem] absolute border-orange-500 border-3 rounded-full p-[1.4rem]"></div>
                                <p className="absolute rounded-full translate-x-[2.1rem] translate-y-[1.8rem] text-tiny text-orange-900 font-bold">{nbrEval}</p>
                            </div>

                            <div className="flex flex-col">
                                <p className="text-left">{userName}</p>
                                <p className="text-left text-small text-default-500">{userMatiere}</p>
                            </div>

                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <Link to="/formulaireAvis">
                            <a>{infoRencontre1}</a>
                            </Link>
                            <a>{infoRencontre2}</a>
                        </CardBody>
                    </Card>
                    
                    <Card className=" ml-auto mr-[auto] w-[95vw] mt-[2vh] overflow-y: auto;">
                        <CardHeader className="flex gap-3">

                            <div className="relative mr-[1.6rem] ml-[1.3rem] translate-x-[-1.35rem] translate-y-[-1.5rem]">

                                <Avatar className="absolute translate-x-[0.125rem] translate-y-[0.125rem]" src={userPP} />

                                <div className="absolute p-[0.15rem] bg-white rounded-full translate-x-[1.8rem] translate-y-[1.5rem]">
                                    <div className="bg-orange-500 p-[0.7rem] rounded-full">
                                    </div>
                                </div>

                                <div className=" translate-x-[-0.21rem] translate-y-[-0.21rem] absolute border-orange-500 border-3 rounded-full p-[1.4rem]"></div>
                                <p className="absolute rounded-full translate-x-[2.1rem] translate-y-[1.8rem] text-tiny text-orange-900 font-bold">{nbrEval}</p>
                            </div>

                            <div className="flex flex-col">
                                <p className="text-left">{userName}</p>
                                <p className="text-left text-small text-default-500">{userMatiere}</p>
                            </div>

                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <Link to="/formulaireAvis">
                            <a>{infoRencontre1}</a>
                            </Link>
                            <a>{infoRencontre2}</a>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </>
    )
}