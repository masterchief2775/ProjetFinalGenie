import { Link } from 'react-router-dom'
import { Avatar, Chip, Button, Divider, Calendar } from "@nextui-org/react";



export default function() {
    let userColor = "default"
    let userImage = "https://i.pravatar.cc/150?u=a042581f4e29026024d" //Juste "" enleve l'image
    let userName = "John Doe Ding Dong Ditch"
    let userEmail = "john.doe.01@edu.cegeptr.qc.ca"
    let userApp = "4.3☆"
    let userType = "Étudiant"
    
    return (
        <>
        <div className="LogOut flex mr-3 pt-[2vh] justify-end h-[10vh]">
            <Link to="/login">
            <Button radius="full" className="bg-gradient-to-tr from-red-600 to-orange-700 text-white shadow-lg">
                Déconnexion
            </Button>
            </Link>
        </div>
        <div className="pl-[2vw] flex w-[100vw] h-[90vh]">
            <div className='w-[28vw]'>
            <Avatar classNames={{
                base: "w-[28vw] h-[28vw]"
            }} /*color={userColor}*/ src={userImage} size="lg"/>
            <p className="text-center pl-[1vw] pt-[1vh]">{userApp} </p>
            </div>
            <div className='w-[70vw] h-[70vw]'>
                <div className="pl-[3vw] pt-[1vw] flex-warp justify-start">
                    <p className="text-2xl">{userName}</p>
                    <p className="overflow-hidden">{userEmail} </p>
                </div>
                <Divider className="dividerProfil ml-[1vw] w-[68vw] my-2" ></Divider>
                <div className="pl-[3vw] pt-[1vw] flex-warp justify-start">
                    <Chip className="mb-2 mr-2" size="sm" radius="sm" variant="shadow"> {userType} </Chip>
                    <Chip className="mb-2 mr-2" size="sm" radius="sm" variant="shadow" color="warning">Math</Chip>
                    <Chip className="mb-2 mr-2" size="sm" radius="sm" variant="shadow" color="secondary">Physique</Chip>
                    <Chip className="mb-2 mr-2" size="sm" radius="sm" variant="shadow" color="secondary">Informatique</Chip>
                    <Chip className="mb-2 mr-2" size="sm" radius="sm" variant="shadow" color="secondary">Algèbre</Chip>
                    <Chip className="mb-2 mr-2" size="sm" radius="sm" variant="shadow" color="secondary">Différentiel</Chip>
                </div>
            </div>
        </div>
        <div>
        </div>

        </>
    )
}