import { Button } from '@/components/ui/button'
import React from 'react'
import Trials from './[trials]/page'
import { Filter } from '../../../components/Filter'
import Link from 'next/link'

export default function Studies() {
    return (
        <>
            <div className='p-8'>
                <div> 
                    <h1 className='text-end text-cyan-700 font-bold hover:cursor-pointer'> See All &nbsp; {'>'} </h1>
                    <div className='flex w-full '>
                        <Link href={'/studies/ClinicalTrials'}>
                        <div className='hover:cursor-pointer' >
                            <img src='GradientPic.png' className=' h-24 w-48 mr-3 rounded-xl' />
                            <h1 className='m-2 font-bold'>Clinical Trials</h1>
                        </div>
                        </Link>
                        <div className='hover:cursor-pointer' >
                            <img src='GradientPic.png' className=' h-24 w-48 mr-3 rounded-xl' />
                            <h1 className='m-2 font-bold'>Behavioral Studies</h1>
                        </div>
                        <div className='hover:cursor-pointer' >
                            <img src='GradientPic.png' className=' h-24 w-48 mr-3 rounded-xl' />
                            {/* <button className=' absolute top-[20%] left-[65%] z-20'>...</button> */}
                            <h1 className='m-2 font-bold'>Survey Research</h1>
                        </div>
                        <div className='hover:cursor-pointer' >
                            <img src='GradientPic.png' className=' h-24 w-48 mr-3 rounded-xl' />
                            <h1 className='m-2 font-bold'>Longitudinal Studies</h1>
                        </div>
                    </div>
                </div>
                <div className='grid grid-flow-col grid-cols-2 mt-32'>
                    <div >
                        <h1 className=' text-3xl font-bold'>All Positions</h1>
                    </div>
                    <div className='text-end'>
                        <input name="search" type='text' placeholder="🔍  Search" className=' p-3 m-2 bg-gray-200 rounded-lg w-[40%] h-10' />
                        <Filter divClassName="inline-block" className=" bg-gray-100 rounded-lg p-4 min-h-10" />
                        <Button className='m-2 p-3'>+ NEW</Button>
                    </div>
                </div>


                <div className='mt-3 '>
                    <h1 className='text-xl font-bold'>Longitudinal Studies</h1>
                    <div className='bg-white mt-3 m-1 border-2 border-gray-100 rounded-lg '>

                    <div className='flex justify-between align-baseline hover:bg-gray-100 p-2 border-b-2 border-gray-100 border-gray-100 hover:cursor-pointer' >
                            <div>
                                <h2 className='text-sm pb-1 font-bold text-cyan-700'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam at rem quas quod quae.</h2>
                                <h2 className='pb-1 font-bold'>Examining the Effectiveness Of Vision Tranining</h2>
                            </div>
                            <div className=' pr-3 mt-1 text-xl'>
                                <button>...</button>
                            </div>                    
                    </div>
                    </div>

                    <h1 className='text-xl font-bold'>Behavioral Studies</h1>
                    <div className='bg-white mt-3 m-1 border-2 border-gray-100 rounded-lg '>
                        <div className='flex justify-between align-baseline hover:bg-gray-100 p-2 border-b-2 border-gray-100 hover:cursor-pointer' >
                            <div>
                                <h2 className='text-sm pb-1 font-bold text-cyan-700'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam at rem quas quod quae.</h2>
                                <h2 className='pb-1 font-bold'>Examining the Effectiveness Of Vision Tranining</h2>
                            </div>
                            <div className=' pr-3 mt-1 text-xl'>
                                <button>...</button>
                            </div>
                        </div>
                        <div className='flex justify-between align-baseline hover:bg-gray-100 p-2 hover:cursor-pointer' >
                            <div>
                                <h2 className='text-sm pb-1 font-bold text-cyan-700'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam at rem quas quod quae.</h2>
                                <h2 className='pb-1 font-bold'>Examining the Effectiveness Of Vision Tranining</h2>
                            </div>
                            <div className=' pr-3 mt-1 text-xl'>
                                <button>...</button>
                            </div>
                        </div>                  
                    </div>

                </div>
            </div>
        </>
    )
}
