import { Link } from 'react-router-dom'
import { Avatar, Chip, Button, Divider, Calendar, Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import { useParams } from 'react-router-dom'
import { getUserById } from '../hooks/userFetching';



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
      <div className="LogOut flex mr-3 pt-[2vh] justify-end h-[10vh]">
        <Link to="/login">
          <Button radius="full" className="bg-gradient-to-tr from-red-600 to-orange-700 text-white shadow-lg">
            Déconnexion
          </Button>
        </Link>
      </div>
      <div className="pl-[2vw] flex w-[100vw] h-[30vh]">
        <div className='w-[28vw]'>
          <Avatar classNames={{
            base: "w-[28vw] h-[28vw]"
          }} color={userColor} src={userImage} size="lg" />
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
            <Chip className="mb-2 mr-2" size="sm" radius="sm" variant="shadow" color="secondary">+</Chip>
          </div>
        </div>
      </div>
      <div className="flex w-[100vw] h-[60vh] overflow-hidden">
        <div className="mx-auto mt-[1vh]">
          <Calendar showMonthAndYearPickers />
        </div>
      </div>

    </>
  )
}