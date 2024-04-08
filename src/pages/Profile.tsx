
import { Avatar, Chip } from "@nextui-org/react";



export default function() {
    let userColor = "default"
    let userImage = "https://i.pravatar.cc/150?u=a042581f4e29026024d" //Juste "" enleve l'image
    let userName = "John Doe"
    let userEmail = "john.doe.01@edu.cegeptr.qc.ca"
    let userType = "Étudiant"
    
    return (
        <>
        <div className="ml-5 flex">
            <Avatar classNames={{
                base: "min-w-20 min-h-20"
            }} color={userColor} src={userImage} size="lg"/>
            <div>
                <p className="ml-2 text-2xl">{userName}</p>
                <p className="ml-3">{userEmail}</p>
                <div className="ml-3 mt-1 flex justify-start overflow-hidden w-[65vw]">
                    <Chip className="mb-4 mr-2" size="sm" radius="sm" variant="shadow"> {userType} </Chip>
                    <Chip className="mb-2 mr-2" size="sm" radius="sm" variant="shadow" color="warning">Math</Chip>
                    <Chip className="mb-2 mr-2" size="sm" radius="sm" variant="shadow" color="secondary">Physics</Chip>
                    <Chip className="mb-2 mr-2" size="sm" radius="sm" variant="shadow" color="secondary">Physics</Chip>
                    <Chip size="sm" radius="sm" variant="shadow" color="secondary">Physics</Chip>
                    <Chip size="sm" radius="sm" variant="shadow" color="secondary">Physics</Chip>
                    
                </div>

            </div>
            
        </div>

        </>
    )
}