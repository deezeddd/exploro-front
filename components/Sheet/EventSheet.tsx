"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet'
import { DatePickerDemo } from '../Datepicker'
import { PiFinnTheHuman } from 'react-icons/pi'



export function EventSheet() {
    return (
        <>
       
            <Sheet>
                <SheetTrigger>
                    <Button className='m-2'>+ New Event</Button>
                </SheetTrigger>
                <SheetContent className='p-0 rounded-lg'  >
                    <SheetHeader  >
                        <SheetTitle className='p-3 text-center text-xl'>New Event</SheetTitle>
                    </SheetHeader>
                    <div>
                            <div className='bg-sky-800 text-white text-center p-10' >
                                <div className='flex justify-center'>
                                <PiFinnTheHuman size={100}   />
                                </div>
                                <h1 className='font-bold text-xl'>Elise Beverely</h1>
                                <h3 className='opacity-70' >Eligible</h3>
                            </div>
                            <div className="p-3">
                                <div className=' mb-8'>
                                    <h1 className='font-bold'>Type Of Event*</h1>
                                </div>
                                <div className='mb-8'>
                                    <h1 className='font-bold'>Start*</h1>
                                    <DatePickerDemo />
                                </div>
                                <div className='mb-8 '>
                                    <h1 className='font-bold'>End*</h1>
                                    <DatePickerDemo />
                                </div>
                                <div >
                                    <h1 className='font-bold'>Notes</h1>
                                    <div className=' bg-gray-100 rounded-lg p-4 min-h-48'>
                                        <h1>Lorem ipsum dolor sit amet.</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                </SheetContent>
            </Sheet>
        </>
    )
}
