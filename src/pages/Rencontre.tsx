import { Button, Input, Radio, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, RadioGroup} from "@nextui-org/react";
import { Children } from "react";
import HeroiconsMagnifyingGlass16Solid from '~icons/heroicons/magnifying-glass-16-solid'

export default function () {
    let heureBanque = "100h"

    return (
        <>
            <div className="h-[100vh] w-[100wh] ">
                <div className="header h-[5vh] bg-[#444444] mb-[5vh]">
                    <div className="bg-[#444444] ">
                        <h1 className="w-[98vw] text-right text-warning-500 text-md font-bold ">Banque: {heureBanque}</h1> 
                    </div>
                    <div className="bg-[#444444] ">
                        <h1 className="pb-[3vh] w-[100vw] text-center text-success-500 text-4xl font-bold titre">Rencontre</h1>
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
                        />
                    <Button className="w-[5vw] m-[auto] mt-[0.5vh] bg-success-600">
                    <HeroiconsMagnifyingGlass16Solid className="w-7 h-7 mb-.5 text-green-800 dark:text-gray-400 group-hover:text-green-500 dark:group-hover:text-blue-500" />
                    </Button>
                    </div>
                </div>
                <div className="flex flex-col mt-[5vh] h-[50vh] ">
                    <Table 
                        selectionMode="single" 
                        aria-label="Example static collection"
                        classNames={{
                            table: "bg-[#444444]",
                            wrapper:"p-0"}}
                        isHeaderSticky
                        className="tableResult overflow-hidden"
                    >
                        <TableHeader>
                            <TableColumn>Nom</TableColumn>
                            <TableColumn>Maitères</TableColumn>
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
                            <TableRow key="2">
                                <TableCell>Tony Reichert</TableCell>
                                <TableCell>CEO</TableCell>
                            </TableRow> 
                            <TableRow >
                                <TableCell>Tony</TableCell>
                                <TableCell>CEO</TableCell>
                            </TableRow> 
                            <TableRow key="2">
                                <TableCell>Tony Reichert</TableCell>
                                <TableCell>CEO</TableCell>
                            </TableRow> 
                            <TableRow key="2">
                                <TableCell>Tony Reichert</TableCell>
                                <TableCell>CEO</TableCell>
                            </TableRow> 
                            <TableRow key="2">
                                <TableCell>Tony Reichert</TableCell>
                                <TableCell>CEO</TableCell>
                            </TableRow> 
                            <TableRow key="2">
                                <TableCell>Tony Reichert</TableCell>
                                <TableCell>CEO</TableCell>
                            </TableRow> 
                            <TableRow key="2">
                                <TableCell>Tony Reichert</TableCell>
                                <TableCell>CEO</TableCell>
                            </TableRow> 
                            <TableRow key="2">
                                <TableCell>Tony Reichert</TableCell>
                                <TableCell>CEO</TableCell>
                            </TableRow> 
                            <TableRow key="2">
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
                        label: "text-gray-100"}}
                >
                    <Radio 
                        value="nom" 
                        className="w-[50wv] ml-[auto] mr-auto" 
                        classNames={{
                        label: "text-gray-100"}}
                    >
                        Nom
                    </Radio>
                    <Radio 
                        value="matiere" 
                        className="w-[50wv] ml-[auto] mr-auto" 
                        classNames={{
                        label: "text-gray-100"}}
                    >
                        Matière
                    </Radio>
                </RadioGroup>
                </div>
            </div>
        </>
    )
}