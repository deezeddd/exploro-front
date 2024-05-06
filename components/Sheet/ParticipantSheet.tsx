"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet'
import { DatePickerDemo } from '../Datepicker'
import { PiFinnTheHuman } from 'react-icons/pi'
import { Filter } from '@/app/(home)/pipeline/Filter'



export function ParticipantSheet() {
    return (
        <>
            <Sheet>
                <SheetTrigger className='m-2 bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'>
                       <h1 className='p-2'>
                         + New Participant
                        </h1> 
                </SheetTrigger>
                <SheetContent className=' p-0 rounded-lg'  >
                    <SheetHeader  >
                        <SheetTitle className='p-3 mt-1 text-center text-xl'>New Participant</SheetTitle>
                    </SheetHeader>
                    <div className='p-3 rounded-lg'>
                            <div className=' p-3 border-2 border-slate-100 rounded-lg' >
                                <h1 className='p-2 font-bold text-2xl'>Participant Info</h1>
                                <div className="p-3">
                                    <div className='mb-4' >
                                        <h1 className='font-bold mb-2 '>Name</h1>
                                        <div className=' bg-gray-100 rounded-lg p-4 min-h-10 '>
                                            <h1></h1>
                                        </div>
                                    </div>
                                    <div className='mb-4' >
                                        <h1 className='font-bold mb-2 '>Email</h1>
                                        <div className=' bg-gray-100 rounded-lg p-4 min-h-10 '>
                                            <h1></h1>
                                        </div>
                                    </div>
                                    <div className='mb-4' >
                                        <h1 className='font-bold mb-2 '>Photo</h1>
                                        <div className=' bg-gray-100 rounded-lg p-4 min-h-10 '>
                                            <h1></h1>
                                        </div>
                                    </div>
                                    <div className='mb-4' >
                                        <h1 className='font-bold mb-2 '>Phone</h1>
                                        <div className=' bg-gray-100 rounded-lg p-4 min-h-10 '>
                                            <h1></h1>
                                        </div>
                                    </div>
                                    <div className='mb-4' >
                                        <h1 className='font-bold mb-2 '>Resume Link</h1>
                                        <div className=' bg-gray-100 rounded-lg p-4 min-h-10 '>
                                            <h1></h1>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className='p-3 rounded-lg'>
                            <div className=' p-3 border-2 border-slate-100 rounded-lg' >
                            <h1 className='p-2 font-bold text-2xl'>Study</h1>
                                <div className="p-3">
                                    <div className='mb-4' >
                                        <h1 className='font-bold mb-2 '>Applied For</h1>
                                        <div className=' bg-gray-100 rounded-lg p-4 min-h-10 '>
                                            <Filter />   
                                            {/* TODO => Filter */}
                                        </div>
                                    </div>
                                    
                                    <div >
                                        <h1 className='font-bold mb-2'>Notes</h1>
                                        <div className=' bg-gray-100 rounded-lg p-4 min-h-48'>
                                            <h1>Lorem ipsum dolor sit amet.</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </SheetContent>
            </Sheet>
        </>
    )
}
