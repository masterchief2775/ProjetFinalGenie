import { Button, Input, Radio, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, RadioGroup } from "@nextui-org/react";

import HeroiconsMagnifyingGlass16Solid from '~icons/heroicons/magnifying-glass-16-solid'
import { Link } from 'react-router-dom'
import { getUserById } from "../hooks/userFetching";
import { useEffect, useState } from "react";

export default function () {

    const { loading, error, data } = getUserById('me')
    const [searchName, setSearchName] = useState('')
    const [currentChanging, setCurrentChanging] = useState('')
    const [searchBarValue, setSearchBarValue] = useState('')
    const [searchSubject, setSearchSubject] = useState('')

    useEffect(() => {
        if (currentChanging) {
            if (currentChanging.target.ariaLabel == "Nom") {
                if(searchBarValue?.target?.value) {
                    setSearchName('')
                } else {
                    setSearchName(searchBarValue.target.value)
                }
                
            } else {
                if(searchBarValue?.target?.value) {
                    setSearchSubject('')
                } else {
                    setSearchSubject(searchBarValue.target.value)
                }

            }
            console.log("searchSubject: " + searchSubject)
            console.log("searchName: " + searchName)
        }

    }, [searchBarValue]);

    useEffect(() => {
        if (currentChanging) {
            if (currentChanging.target.ariaLabel == "Nom") {
                console.log("searchName : " + searchName)
                if (searchName != null) {
                setSearchBarValue(searchName)
            }
            } else {
                if (searchSubject != null) {
                    setSearchBarValue(searchSubject)
                }

            }
        }

    }, [currentChanging]); 

    if (loading) return <p>Loading user...</p>;
    if (error) return <p>Error fetching user: {error.message}</p>;

    console.log(data)
    let heureBanque = data.usersPermissionsUser.data.attributes.bankedTime + "h"
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
                            value={searchBarValue?.target?.value}
                            onChange={setSearchBarValue}
                        />
                        <Button className="w-[5vw] m-[auto] mt-[0.5vh] bg-primary-600">
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
                        className="tableResult overflow-hidden"
                    >
                        <TableHeader>
                            <TableColumn>Nom</TableColumn>
                            <TableColumn>Matières</TableColumn>
                        </TableHeader>
                        <TableBody >
                            <TableRow key="1">
                                <TableCell>Tony Reichert</TableCell>
                                <TableCell>CEO</TableCell>
                            </TableRow>

                            <TableRow key="2">
                                <TableCell>Tony Reichert</TableCell>
                                <TableCell>CEO</TableCell>
                            </TableRow>
                            <TableRow key="3">
                                <TableCell>Tony Reichert</TableCell>
                                <TableCell>CEO</TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell>Tony</TableCell>
                                <TableCell>CEO</TableCell>
                            </TableRow>
                            <TableRow key="4">
                                <TableCell>Tony Reichert</TableCell>
                                <TableCell>CEO</TableCell>
                            </TableRow>
                            <TableRow key="5">
                                <TableCell>Tony Reichert</TableCell>
                                <TableCell>CEO</TableCell>
                            </TableRow>
                            <TableRow key="6">
                                <TableCell>Tony Reichert</TableCell>
                                <TableCell>CEO</TableCell>
                            </TableRow>
                            <TableRow key="7">
                                <TableCell>Tony Reichert</TableCell>
                                <TableCell>CEO</TableCell>
                            </TableRow>
                            <TableRow key="8">
                                <TableCell>Tony Reichert</TableCell>
                                <TableCell>CEO</TableCell>
                            </TableRow>
                            <TableRow key="9">
                                <TableCell>Tony Reichert</TableCell>
                                <TableCell>CEO</TableCell>
                            </TableRow>
                            <TableRow key="10">
                                <TableCell>Tony Reichert</TableCell>
                                <TableCell>CEO</TableCell>
                            </TableRow>
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
                        onChange={setCurrentChanging}
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
                    <div className="text-center">
                        <Link to="/formulaireRendezVous">
                            <Button color="primary" variant="shadow" className="w-40 ml-2 mr-2 mt-2 btnSign">
                                Rendez-vous
                            </Button>
                        </Link>
                        <Link to="/formulaireRendezVousGroupe">
                            <Button color="primary" variant="shadow" className="w-40 ml-2 mr-2 mt-2 btnSign">
                                Rendez-vous groupe
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}