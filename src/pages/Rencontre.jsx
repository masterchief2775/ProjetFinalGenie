import { Button, Input, Radio, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, RadioGroup } from "@nextui-org/react";

import HeroiconsMagnifyingGlass16Solid from '~icons/heroicons/magnifying-glass-16-solid'
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";
import {getUserById, getUserByNameAndStrength} from "../hooks/ClientHooks";
import { useUserData } from "../hooks/useUserData";

export default function Rencontre() {
    const { userLoading, userError, userData } = useUserData();
    const [tutorsTable, setTutorsTable] = useState([])
    const [searchName, setSearchName] = useState('')
    const [currentChanging, setCurrentChanging] = useState('Matière')
    const [searchBarValue, setSearchBarValue] = useState('')
    const [searchSubject, setSearchSubject] = useState('')
    const [selectedUser, setSelectedUser] = useState(null)
    useEffect(() => {
        if (currentChanging) {
            if (currentChanging == "Nom") {
                if (searchBarValue != null && searchBarValue != undefined) {
                    setSearchName(searchBarValue)
                }

            } else {
                if (searchBarValue != null && searchBarValue != undefined) {
                    setSearchSubject(searchBarValue)
                }
            }
        }
        //console.log(searchName)
        //console.log(searchSubject)
    }, [searchBarValue]);

    useEffect(() => {
        async function fetchData() {
            var { data } = await getUserByNameAndStrength('','','')
            console.log(data)
            setTutorsTable(data.usersPermissionsUsers.data);
        }
        fetchData()
        

    }, []);

    useEffect(() => {
        //console.log("Entered selectedUser")

        if (currentChanging) {
            if (currentChanging == "Nom") {
                setSearchBarValue(searchName)
            } else {
                setSearchBarValue(searchSubject)
            }
        }
    }, [currentChanging])

    useEffect(() => {
        if (selectedUser) {
            console.log(selectedUser)
        }
    }, [selectedUser])
    
    if (userLoading) return <p>Loading user...</p>;
    if (userError) return <p>Error fetching user: {userError.message}</p>;

    async function handleSearch() {
        setSelectedUser(null)
        var firstName;
        var lastName;
        var strength = searchSubject;
        var name = searchName.split(' ');
        if (name.length > 1) {
            firstName = name[0];
            lastName = name[1];
        } else {
            firstName = name[0];
            lastName = '';
        }
        try {
            var { loading, error, data } = await getUserByNameAndStrength(firstName, lastName, strength);
            console.log(data)
            setTutorsTable(data.usersPermissionsUsers.data)
        } catch(e) {
            console.error(e);
        }
        
    }
    let heureBanque = userData.usersPermissionsUser.data.attributes.bankedTime + "h"
    return (
        <>
            <div className="h-[100vh] w-[100wh] ">
                <div className="header h-[5vh] bg-[#444444] mb-[5vh]">
                    <div className="bg-[#041638] ">
                        <h1 className="w-[98vw] text-right text-primary-500 text-md font-bold ">Banque: {heureBanque}</h1>
                    </div>
                    <div className="bg-[#041638] ">
                        <h1 className="pb-[3vh] w-[100vw] text-center text-primary-500 text-4xl font-bold titre">Rencontre</h1>
                    </div>
                </div>
                <div className="search h-[10vh]">
                    <div className="flex search w-[100vw] pt-[5vh] pl-[2vw]">
                        <Input
                            radius="sm"
                            type="text"
                            size="lg"
                            placeholder="Entrez votre recherche"
                            className="w-[69vw] h-[8vh]"
                            value={searchBarValue}
                            onChange={(e) => {setSearchBarValue(e.target.value)}}
                        />
                        <Button className="w-[5vw] m-[auto] mt-[0.5vh] bg-primary-600" onClick={handleSearch}>
                            <HeroiconsMagnifyingGlass16Solid className="w-7 h-7 mb-.5 text-primary-900 dark:text-gray-400 group-hover:text-primary-700 dark:group-hover:text-blue-500" />
                        </Button>
                    </div>
                </div>
                <div className="flex flex-col mt-[5vh] h-[45vh] ml-2 mr-2">
                    <Table
                        selectionMode="single"
                        aria-label="Example static collection"
                        classNames={{
                            table: "bg-[#041638]",
                            wrapper: "p-0"
                            
                        }}
                        isHeaderSticky
                        onSelectionChange={(e) => setSelectedUser(e.currentKey)}
                        className="tableResult overflow-hidden"
                    >
                        <TableHeader>
                            <TableColumn>Nom</TableColumn>
                            <TableColumn>Matière</TableColumn>
                        </TableHeader>
                        <TableBody>
                        {tutorsTable.map((user, index) => (
                            <TableRow key={index}>
                                <TableCell>{user.attributes.firstName} {user.attributes.lastName}</TableCell>
                                <TableCell>{user.attributes.strengths.data[0].attributes.name}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </div>
                <div className="h-[10vh]">

                    <RadioGroup
                        label="Option de recherche"
                        orientation="horizontal"
                        className="text-xl text-center font-bold pt-[3vh]"
                        classNames={{
                            label: "text-gray-100"
                        }}
                        onChange={(e) => { setCurrentChanging(e.target.ariaLabel) }}
                        defaultValue="matiere"
                    >
                        <Radio
                            value="nom"
                            className="w-[50wv] ml-[auto] mr-auto"
                            classNames={{
                                label: "text-gray-100"
                            }}>
                            Nom
                        </Radio>
                        <Radio
                            value="matiere"
                            className="w-[50wv] ml-[auto] mr-auto"
                            classNames={{
                                label: "text-gray-100"
                            }}>
                            Matière
                        </Radio>
                    </RadioGroup>
                    <div className="text-center mt-4">
                        <Link to={userData.usersPermissionsUser.data.attributes.isTeacher ? "/formulaireRendezVousGroupe" : "/formulaireRendezVous/" + tutorsTable[selectedUser]?.id + "?subject=" + tutorsTable[selectedUser]?.attributes?.strengths?.data[0]?.id} disabled={!selectedUser}>
                            <Button id="rendezVousButton" color="primary" variant="shadow" className={`w-${userData.usersPermissionsUser.data.attributes.isTeacher ? 60 : 40} ml-2 mr-2 mt-2 btnSign`} isDisabled={!selectedUser}>
                                {userData.usersPermissionsUser.data.attributes.isTeacher ? "Créer un Rendez-Vous de groupe" : "Prendre Rendez-vous"}
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}