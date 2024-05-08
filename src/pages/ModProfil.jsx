import { Link } from 'react-router-dom'
import { Avatar, Chip, Button, Divider, Calendar, Input, Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import { useParams } from 'react-router-dom'
import { getUserById, getMatieresFromStrenghtArray } from '../hooks/userFetching';
import HeroiconsTrashSolid from '~icons/heroicons/trash-solid';
import { Select, SelectSection, SelectItem } from "@nextui-org/react";
import { useMutation, useQuery } from '@apollo/client';
import { UPDATE_MATIERE } from '../hooks/mutations';
import { useState } from 'react';


export default function ModProfil() {
  const { loading: userLoading, error: userError, data: userData } = getUserById('me');
  const userStrengths = userData?.usersPermissionsUser.data.attributes?.strengths.data || [];
  const strengthArray = userStrengths.map(strength => strength.id);
  let userId = localStorage.getItem("userId")

  const [selectedStrengthId, setSelectedStrengthId] = useState(null);


  // Function to handle selection change in the Select component
  const handleSelectChange = (event) => {
    setSelectedStrengthId(event.target.value);
    const user = data?.usersPermissionsUser?.data?.attributes;
    let userImage = ""
    if (user.picture.data?.attributes?.url) {
      userImage = "http://52.242.29.209:1337" + user.picture.data.attributes.url
    }
    let userType = "Étudiant"
    if (user.isTeacher) {
      userType = "Enseignant"
    }

  const user = data?.usersPermissionsUser?.data?.attributes;
  let userColor = "primary"
  let userImage = ""
  if (user.picture.data?.attributes?.url) {
    userImage = "http://52.242.29.209:1337" + user.picture.data.attributes.url
  }
  let userType = "Étudiant"
  if (user.isTeacher) {
    userType = "Enseignant"

  }


  const handleRemoveStrength = async (strengthId) => {
    // 1. Filter out the strength to be removed from user strengths
    const updatedStrengths = user.strengths.data.filter(strength => strength.id !== strengthId);
    const userToUpdate = {
      id: user.id,
      data: {
        strengths: updatedStrengths.map(strength => strength.id),
      },
    };

    // 2. Call UPDATE_MATIERE mutation to update user data
    try {
      const { data } = await UPDATE_MATIERE({ variables: userToUpdate });
      console.log("Strength removed successfully:", data);
      // Update UI to reflect the change (optional)
    } catch (error) {
      console.error("Error removing strength:", error);
    }
  };



  const handleAddStrengh = (strengthId) => {
    var updatedStrengths = strengthArray
    updatedStrengths.push(strengthId)

    updateMatiere({
      variables: {
        id: userId,
        data: {
          strengths: updatedStrengths
        }
      },
    })
  };

  const { loading: matieresLoading, error: matieresError, data: matieresData } = getMatieresFromStrenghtArray(strengthArray);
  var [updateMatiere, { loading, error }] = useMutation(UPDATE_MATIERE);

  if (userLoading || matieresLoading) return <p>Loading user...</p>;
  if (userError || matieresError) return <p>Error fetching user: {userError ? userError.message : matieresError.message}</p>;

  return (
    <>
      <div className="h-[10vh] py-[2vh] bg-[#041638]">
        <h1 className="text-center text-primary text-4xl font-bold titre" >Paramètres</h1>
      </div>
      <form action="">
        <Card className="ml-auto mr-[auto] w-[90vw] mt-[2vh] bg-[#041638] drop-shadow-xl">
          <CardHeader className="w-[100%] mb-2">
            <div className="pl-[2vw] flex w-[100vw] h-[13vh] mt-[2vh]">
              <div className='w-[28vw]'>
                <Avatar isBordered classNames={{
                  base: "w-[28vw] h-[28vw]"
                }} color={userColor} src={userImage} size="lg" />
              </div>
              <div className='w-[70vw] h-[20vh] '>
                <div className='pl-[3vw] pt-[10vw] overflow-hidden'>
                  <input name="pochette" type="file">
                  </input>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardBody>
            <div className="flex h-[7vh] mt-[2vh]">
              <Select
                label="Matière"
                placeholder="Choisir une matière"
                className="w-[98%] ml-[auto] mr-[auto] mb-[5%] max-w-xs"
                color="primary"
                radius="sm"
                size="lg"
                onChange={handleSelectChange}
                value={selectedStrengthId}
              >
                {matieresData?.subjects?.data.map((matiere) => (
                  <SelectItem key={matiere.id} value={matiere.id} color="primary" className='matiere'>
                    {matiere.attributes.name}
                  </SelectItem>
                ))}

              </Select>
              <Button color="primary" variant="shadow" className="w-[7vw] btnSign h-[7vh] ml-[2vw]" onClick={() => handleAddStrengh(selectedStrengthId)} type='submit'>
                Ajouter
              </Button>
            </div>
          </CardBody>
          <CardFooter>
            <div className="pl-[3vw] mt-[1vw] flex flex-wrap justify-start overflow-y-scroll items-center h-[30vh]">
              {user.strengths?.data?.map((strength) => (
                <div className='mt-2 mr-2 flex'>
                  <Chip size="m" radius="sm" variant="shadow" color="primary">{strength.attributes.name}</Chip>
                  <button type="submit" className='py-auto'>< HeroiconsTrashSolid className="ml-3 w-6 h-6 text-white" onClick={() => handleRemoveStrength(strength.id)}></HeroiconsTrashSolid></button>
                </div>
              ))}
            </div>
          </CardFooter>
          <Divider className="dividerProfil ml-[1vw] w-[88vw] my-2"></Divider>
          <div className='text-center mb-[2vh]'>
            <Link to='/Profile/me'>
              <Button color="primary" variant="shadow" className="w-[7vw] btnSign h-[7vh]">
                Confirmer
              </Button>
            </Link>

          </div>
        </Card>
      </form>








    </>


  )
}