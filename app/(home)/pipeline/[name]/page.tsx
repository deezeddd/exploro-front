import React from 'react'
import BreadcrumbComp from './BreadCrumbComp'
import { Button } from '@/components/ui/button'
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover'
import { Filter } from '../Filter'
import { EventSheet } from '@/components/Sheet/EventSheet'

export default function Name() {
    return (
        <>
            <div className=''>
                <div className='p-14 bg-slate-50'>
                    <BreadcrumbComp />
                    <div className='flex justify-between mt-3'>
                        <div className='flex'>
                            <div>
                                <img src="/ExploroLogo.jpeg" className='h-28 mr-4 rounded-lg' />
                            </div>
                            <div className='mt-5'>
                                <h2 className=' text-xs font-bold text-sky-600'>ELIGIBLE  &nbsp;</h2>
                                <h2 className='font-bold text-2xl'>Elise Beverley  &nbsp;</h2>
                                <h2 className='text-neutral-400'>18-24  &nbsp;</h2>
                            </div>
                        </div>
                        <div className='flex mt-5'>
                            <div>
                                <Button className='bg-sky-800'>☎️ Call </Button>
                                <Button className='mr-2 ml-2 bg-slate-200 border border-slate-300 text-black hover:text-white' >✉️ Email </Button>
                                {/* <Button className='bg-slate-200 text-black hover:text-white'>...</Button> */}
                                <div className=' inline-block'>
                                    <Popover >
                                        <PopoverTrigger asChild>
                                            <Button variant="outline">...</Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-36 p-0 mr-20">
                                            <div className=''>
                                                < h1 className='text-sm pl-2 pt-3 pb-2 hover:bg-slate-100 hover:cursor-pointer'>GO</h1>
                                                < h1 className='text-sm pl-2 pt-3 pb-2 hover:bg-slate-100 hover:cursor-pointer'>Edit Candidate</h1>
                                                < h1 className='text-sm pl-2 pt-3 pb-2 hover:bg-slate-100 hover:cursor-pointer'>GO</h1>

                                            </div>
                                        </PopoverContent>
                                </Popover>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div className='flex justify-between'>
                            <h1 className='font-bold'>Status &nbsp;</h1>
                            <h5 className='text-neutral-400 font-bold text-sm'>Required</h5>
                        </div>
                        <div className='flex mt-3'>
                            <h1 className='text-sm rounded-3xl border p-2 pl-4 pr-4 mr-3'>🆕 Applied  &nbsp;</h1>
                            <h1 className='text-sm rounded-3xl border p-2 pl-4 pr-4 mr-3'>🕧 Screening  &nbsp;</h1>
                            <h1 className='text-sm rounded-3xl border p-2 pl-4 pr-4 mr-3'>📆 Enrolled  &nbsp;</h1>
                            <h1 className='text-sm rounded-3xl border p-2 pl-4 pr-4 mr-3'>❌ Ineligible  &nbsp;</h1>
                            <h1 className='text-sm rounded-3xl border p-2 pl-4 pr-4 mr-3'>👏 Completed  &nbsp;</h1>
                        </div>
                    </div>
                </div>
                <div className='p-14 border'>
                    <div >
                        <div className='grid grid-flow-col grid-cols-2 gap-5 p-5 border-2 border-slate-200 rounded-md '>
                            <div>
                                <h1 className=' text-2xl font-bold mb-3'>Applied For:</h1>
                                <div className='text-sm flex justify-between align-baseline bg-gray-100 p-2 rounded-lg hover:cursor-pointer hover:bg-gray-200' >
                                    <div >
                                        <h2 className=' pb-1 font-bold text-cyan-700 uppercase'> longitudinal Studies</h2>
                                        <h2 className='pb-1 font-bold'>Examining the Effectiveness Of Vision Tranining</h2>
                                        <p className='text-neutral-500 w-[90%] max-h-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae cumque </p>
                                    </div>
                                    <div className='pr-3 mt-[5%] text-xl'>
                                        <button> {'>'} </button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <h2 className='font-bold mb-3 text-sky-800  '>Signed Consent Form</h2>
                                    <button type="button" className='bg-slate-200 rounded-lg pl-2 pr-2 p-1 font-bold text-xs text-sky-800 hover:bg-slate-300 '>↗ View Form</button>
                                </div>
                                <div className='mt-4 '>
                                    <h1 className='font-bold'>Notes</h1>
                                    <div className=' bg-gray-100 rounded-lg p-4 min-h-48'>
                                        <h1>Lorem ipsum dolor sit amet.</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-8'>
                        <div className='p-5 border-2 border-slate-200 rounded-md '>
                            <div className='flex justify-between'>
                                <h1 className='text-2xl font-bold'>Upcoming Meetings</h1>
                                <EventSheet/>
                            </div>
                            <div>
                                <div className='flex justify-between mt-6'>
                                    <div>
                                        <h1 className=' font-bold'>April 2024</h1>
                                    </div>
                                    <div>
                                        {/* TODO select options dropdown */}
                                        <Button className='ml-2'>Month</Button>
                                        <Button className='ml-2'>Today</Button>
                                        <Button className='ml-2'>{'<'}</Button>
                                        <Button className='ml-2'>{'>'}</Button>
                                    </div>
                                </div>
                                <div className='mt-4'>
                                    <h1>Notes</h1>
                                    <div className=' bg-gray-100 rounded-lg p-3 '>
                                        <h1>adsasdasd</h1>
                                        <h1>Lorem ipsum dolor sit amet.</h1>
                                        <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab?</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
