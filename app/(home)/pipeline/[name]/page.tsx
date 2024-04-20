import React from 'react'
import BreadcrumbComp from './BreadCrumbComp'
import { Button } from '@/components/ui/button'

export default function Name() {
    return (
        <>
            <div className='p-14  '>
                <div>
                    <BreadcrumbComp />
                    <div className='flex '>
                        <div>
                            <h1>Image  &nbsp;</h1>
                        </div>
                        <div>
                            <h2>Eligible  &nbsp;</h2>
                            <h2>Elise Beverley  &nbsp;</h2>
                            <h2>18-24  &nbsp;</h2>
                        </div>
                        <div className=' flex'>
                            <h3>Call  &nbsp;</h3>
                            <h3>Email  &nbsp;</h3>
                            <h4>...  &nbsp;</h4>
                        </div>
                    </div>
                    <div>
                        <div className='flex'>
                            <h1>Status &nbsp;</h1>
                            <h5>required</h5>
                        </div>
                        <div className='flex'>
                            <h1>Applied  &nbsp;</h1>
                            <h1>Applied  &nbsp;</h1>
                            <h1>Applied  &nbsp;</h1>
                            <h1>Applied  &nbsp;</h1>
                        </div>
                    </div>
                </div>
                <div className='mt-8'>
                    <div className='grid grid-flow-col grid-cols-2 gap-5 p-5 border-2 border-slate-200 rounded-md '>
                        <div>
                            <h1 className=' text-2xl font-bold'>Applied For:</h1>
                            <div className=' bg-gray-100 rounded-lg '>
                                <h1>adsasdasd</h1>
                                <h1>Lorem ipsum dolor sit amet.</h1>
                                <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab?</h1>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h2>Signed Consent Form</h2>
                                <button type="button" className='bg-slate-200 rounded-lg p-1 text-sm text-blue-300 '>View Form</button>
                            </div>
                            <div className='mt-4'>
                                <h1>Notes</h1>
                                <div className=' bg-gray-100 rounded-lg '>
                                    <h1>adsasdasd</h1>
                                    <h1>Lorem ipsum dolor sit amet.</h1>
                                    <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab?</h1>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='mt-8'>
                    <div className='p-5 border-2 border-slate-200 rounded-md '>
                        <div className='flex justify-between'>
                            <h1 className='text-2xl font-bold'>Upcoming Meetings</h1>
                            <Button>+ New Event</Button>
                        </div>
                        <div>
                            <div className='flex justify-between mt-6'>
                                <div>
                                    <h1 className=' font-bold'>April 2024</h1>
                                </div>
                                <div>
                                    <Button className='ml-2'>+ New Event</Button>
                                    <Button className='ml-2'>+ New Event</Button>
                                    <Button className='ml-2'>+ New Event</Button>
                                </div>
                            </div>
                            <div className='mt-4'>
                                <h1>Notes</h1>
                                <div className=' bg-gray-100 rounded-lg '>
                                    <h1>adsasdasd</h1>
                                    <h1>Lorem ipsum dolor sit amet.</h1>
                                    <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab?</h1>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
