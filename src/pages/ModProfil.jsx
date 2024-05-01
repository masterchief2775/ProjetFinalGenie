import { Link } from 'react-router-dom'
import { Avatar, Chip, Button, Divider, Calendar, Input} from "@nextui-org/react";
import { useParams } from 'react-router-dom'
import { getUserById } from '../hooks/userFetching';
import HeroiconsTrashSolid from '~icons/heroicons/trash-solid';



export default function () {
    const { id } = useParams(); // Extract the ID from URL parameters
    console.log(id)
    const { loading, error, data } = getUserById(id)
    
    
    if (loading) return <p>Loading user...</p>;
    if (error) return <p>Error fetching user: {error.message}</p>;
    
    const user = data?.usersPermissionsUser?.data?.attributes;
    let userColor = "default"
    let userImage = "http://52.242.29.209:1337" + user.picture.data.attributes.url //"http://52.242.29.209:1337" + data.picture.url
    let userName = user.firstName + " " + user.lastName
    let userEmail = user.email
    let userApp = user.reviewAvg + "☆"
    let userType = "Étudiant"
    if (user.isTeacher) {
      userType = "Enseignant"
    }

  return (
    <>
      <div className="h-[10vh] py-[2vh] bg-[#444444]">
        <h1 className="text-center text-success-500 text-4xl font-bold titre" >Paramètres</h1>
      </div>

      <div className="pl-[2vw] flex w-[100vw] h-[20vh] mt-[2vh]">
        <div className='w-[28vw]'>
          <Avatar classNames={{
            base: "w-[28vw] h-[28vw]"
          }} color={userColor} src={userImage} size="lg" />
        </div>
        <div className='w-[70vw] h-[20vh] '>
          <div className='pl-[3vw] pt-[10vw] overflow-hidden'>
            <input className='' name="pochette" type="file"> 
            </input>
          </div>
        </div>
      </div>

      <div className="pl-[2vw] pr-[2vw] w-[100vw] h-[60vh]">
        <div className="flex h-[7vh] mt-[2vh]">
        <Input
                radius="sm"
                type="text"
                label="Compétence"
                size="lg"
                placeholder="Matière"
                className="w-[75vw] mr-[1vw]"
        />
        <Button color="success" variant="shadow" className="w-[7vw] btnSign h-[7vh]">
                Ajouter
        </Button>
        </div>
        <div className="pl-[3vw] mt-[1vw] flex flex-col justify-start overflow-y-scroll h-[53vh]">
            <div className='mt-2 mr-2 flex'>
              <Chip size="m" radius="sm" variant="shadow" color="warning">Math</Chip>
              <button type="submit" className='py-auto'>< HeroiconsTrashSolid className="ml-3 w-6 h-6 "/></button>
            </div>
            <div className='mt-2 mr-2 flex'>
              <Chip size="m" radius="sm" variant="shadow" color="warning">Science</Chip>
              <button type="submit" className='py-auto'>< HeroiconsTrashSolid className="ml-3 w-6 h-6 "/></button>
            </div>
            <div className='mt-2 mr-2 flex'>
              <Chip size="m" radius="sm" variant="shadow" color="warning">Philo</Chip>
              <button type="submit" className='py-auto'>< HeroiconsTrashSolid className="ml-3 w-6 h-6 "/></button>
            </div>
            <div className='mt-2 mr-2 flex'>
              <Chip size="m" radius="sm" variant="shadow" color="warning">Info</Chip>
              <button type="submit" className='py-auto'>< HeroiconsTrashSolid className="ml-3 w-6 h-6 "/></button>
            </div>
          </div>
      </div>
    </>
  )
}