import React from 'react'
import BreadcrumbComp from '../pipeline/[name]/BreadCrumbComp'
import { Button } from '@/components/ui/button'
import { CarouselComp } from '../pipeline/CarouselComp'

export default function Name() {
    return (
        <>
            <div className=''>
                <div className='p-14 bg-slate-50'>
                    <BreadcrumbComp />
                    <div className='flex justify-between mt-1'>
                        <div className='flex'>

                            <div className='mt-5'>
                                <h2 className=' text-xs font-bold text-sky-600'>ACTIVE </h2>
                                <h2 className='font-bold text-2xl'>Examining the Effectiveness of Vision Training </h2>
                                <h2 className='text-neutral-400'>2 Candidates(s) </h2>
                            </div>
                        </div>
                        <div className='flex mt-5'>
                            <div>
                                <Button className='bg-sky-800'>Edit Posting </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='p-14 border'>
                    <div className='grid grid-flow-col grid-cols-2  '>
                        <h1 className=' text-3xl font-bold'>Participant Pipeline</h1>
                        <div >
                            <input name="search" type='text' placeholder="🔍  Search" className=' p-3 m-2 bg-gray-200 rounded-lg w-[45%] h-10' />
                            <select disabled className='btn w-28 h-9 bg-gray-200 p-2 rounded-md text-gray-500 border-r-4'>
                                <option defaultChecked> Filter By </option>
                                <option value="YO"> YO</option>
                            </select>
                            <Button className='m-2'>+ New Participant</Button>
                        </div>
                    </div>
                </div>
                <div className='p-24'> 
                    <CarouselComp />
                </div>
            </div>
        </>
    )
}
