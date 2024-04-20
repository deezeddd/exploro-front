import { Button } from '@/components/ui/button'
import React from 'react'
import { PiFinnTheHuman } from 'react-icons/pi'

export default function Participants() {
    return (
        <>
            <div className='p-8 '>
                <div className='grid grid-flow-col grid-cols-2 justify-between'>
                    <h1 className=' text-3xl font-bold'>Participants</h1>
                    <div >
                        <input name="search" type='text' placeholder="🔍  Search" className=' p-3 m-2 bg-gray-200 rounded-lg w-[40%] h-10' />
                        <select disabled className='btn w-28 h-9 bg-gray-200 p-2 rounded-md text-gray-500 border-r-4'>
                            <option defaultChecked> Filter By </option>
                            <option value="YO"> YO</option>
                        </select>
                        <Button className='m-2'>+ Add Participant</Button>
                    </div>
                </div>
                <div className=' w-screen mt-4'>
                    <div className="flex flex-col">
                        <div className="-m-1.5">
                            <div className="p-1.5 max-w-full w-[90%] inline-block align-middle">
                                <div className="border rounded-lg overflow-hidden">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th scope="col" className="px-6 py-3 text-start font-bold text-sm  text-gray-500 uppercase">APPLICANT NAME</th>
                                                <th scope="col" className="px-6 py-3 text-start text-sm font-bold text-gray-500 uppercase">POSITION</th>
                                                <th scope="col" className="px-6 py-3 text-start text-sm font-bold text-gray-500 uppercase">STATUS</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <tr>

                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 flex"> <PiFinnTheHuman size={30} className='mr-3' />  John Brown</td>
                                                <td className=" px-6 py-4 text-sm text-gray-800 truncate max-w-xs">
                                                    Lorem ipsum dolor sit amet  fdfkafaflnaljfnanfdnafnfdsaj nafdn fn akjn kjanfjk gnjkfn jsfdngjg jkds ngkjsdng
                                                </td>                                                   
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">APPLIED</td>

                                            </tr>

                                            <tr>
                                                <td className="px-6 py-4 whitespace-nowrap font-bold font-medium text-black flex "> <PiFinnTheHuman size={30} className='mr-3' /> Green SquarePants  </td>
                                                <td className=" px-6 py-4 text-sm text-gray-800 truncate max-w-xs">
                                                    Lorem ipsum dolor sit amet  fdfkafaflnaljfnanfdnafnfdsaj nafdn fn akjn kjanfjk gnjkfn jsfdngjg jkds ngkjsdng
                                                </td>                                                
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">REJECTED</td>
                                            </tr>

                                            <tr>
                                                <td className="px-6 py-4 whitespace-nowrap font-bold font-medium text-black flex "> <PiFinnTheHuman size={30} className='mr-3' />Joe Black</td>
                                                <td className=" px-6 py-4 text-sm text-gray-800 truncate max-w-xs">
                                                    Lorem ipsum dolor sit amet  fdfkafaflnaljfnanfdnafnfdsaj nafdn fn akjn kjanfjk gnjkfn jsfdngjg jkds ngkjsdng
                                                </td>   
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">SCREENING</td>

                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
