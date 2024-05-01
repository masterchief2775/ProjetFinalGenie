import { Link } from 'react-router-dom'
import LogoutComponent from '../components/LogoutComponent'
import { Avatar, Chip, Button, Divider, Calendar, Popover, PopoverContent, PopoverTrigger, Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import { useParams } from 'react-router-dom'
import { getUserById } from '../hooks/userFetching';



export default function () {
  const { id } = useParams(); // Extract the ID from URL parameters
  console.log(id)
  const { loading, error, data } = getUserById(id)


  if (loading) return <p>Loading user...</p>;
  if (error) return <p>Error fetching user: {error.message}</p>;

  const user = data?.usersPermissionsUser?.data?.attributes;
  let userColor = "primary"
  let userImage = "http://52.242.29.209:1337" + user.picture.data.attributes.url //"http://52.242.29.209:1337" + data.picture.url
  let userName = user.firstName + " " + user.lastName
  let userEmail = user.email
  let userApp = user.reviewAvg + "☆"
  let userType = "Étudiant"
  let userId = user.userId
  if (user.isTeacher) {
    userType = "Enseignant"
  }

  return (
    <>
      <LogoutComponent userId={userId} id={id} />
      <Card className="ml-auto mr-[auto] w-[90vw] bg-[#041638] drop-shadow-xl">
        <CardHeader className="w-[100%] mb-2">
          <h1 className="text-center text-primary-500 text-4xl font-bold mx-auto titre">Profile</h1>
        </CardHeader>
        <CardBody className="w-[100%]">
          <div className='flex'>
            <div className='w-[28vw]'>
              <Avatar isBordered classNames={{
                base: "w-[28vw] h-[28vw]"
              }} color={userColor} src={userImage} size="lg" />
              <p className="text-center text-primary pl-[1vw] pt-[1vh]">{userApp} </p>
            </div>
            <div className="pl-[3vw] pt-[1vw] flex-warp justify-start">
              <p className="text-2xl text-primary">{userName}</p>
              <p className="overflow-hidden text-primary">{userEmail} </p>
            </div>
          </div>
          <div className='w-[60vw] h-[20vw]'>
            <Divider className="dividerProfil ml-[1vw] w-[75vw] my-2"></Divider>
            <div className="pl-[3vw] pt-[1vw] flex-warp justify-start">
              <Chip className="mb-2 mr-2" size="sm" radius="sm" variant="shadow"> {userType} </Chip>
              <Chip className="mb-2 mr-2" size="sm" radius="sm" variant="shadow" color="primary">Math</Chip>
            </div>
          </div>
        </CardBody>
        <CardFooter>
          <div className="flex w-[100vw] overflow-hidden">
            <div className="mx-auto">
              <Calendar showMonthAndYearPickers />
            </div>
          </div>
        </CardFooter>
      </Card>


    </>
  )
}