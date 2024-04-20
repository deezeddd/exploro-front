import { Button } from '@/components/ui/button'
import React from 'react'

export default function Studies() {
    return (
        <>
            <div className='p-8'>
                <div>
                    <h1 className='text-end'> See All {'>'} </h1>
                    <div className='flex w-full h-44'>
                            <h1 className='mr-3'>Clinical Trials</h1>
                            <h1 className='mr-3'>Clinical Trials</h1>
                            <h1 className='mr-3'>Clinical Trials</h1>
                            <h1 className='mr-3'>Clinical Trials</h1>
                    </div>
                </div>
                <div>
                    <div className='grid grid-flow-col grid-cols-2 justify-between'>
                        <h1 className=' text-3xl font-bold'>All Positions</h1>
                        <div >
                            <input name="search" type='text' placeholder="🔍  Search" className=' p-3 m-2 bg-gray-200 rounded-lg w-[40%] h-10' />
                            <select disabled className='btn w-28 h-9 bg-gray-200 p-2 rounded-md text-gray-500 border-r-4'>
                                <option defaultChecked> Filter By </option>
                                <option value="YO"> YO</option>
                            </select>
                            <Button className='m-2'>+ NEW</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
