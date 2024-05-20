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
import { DatePicker } from '../Datepicker'
import { PiFinnTheHuman } from 'react-icons/pi'
import { Filter } from '../Filter'



export function EventSheet() {
    return (
        <>
            <Sheet>
            <SheetTrigger className='m-2 bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'>
                       <h1 className='p-2'>
                         + New Event
                        </h1> 
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
                                    <h1 className='font-bold mb-2'>Type Of Event<small className='text-red-500'>*</small></h1>
                                    <Filter  className="  rounded-lg p-4 min-h-11" />
                                </div>
                                <div className='mb-8'>
                                    <h1 className='font-bold mb-2'>Start<small className='text-red-500'>*</small></h1>
                                    <DatePicker />
                                </div>
                                <div className='mb-8 '>
                                    <h1 className='font-bold mb-2'>End<small className='text-red-500'>*</small></h1>
                                    <DatePicker />
                                </div>
                                <div >
                                    <h1 className='font-bold mb-2'>Notes</h1>
                                    <div className=' '>
                                    <textarea className='bg-gray-100 rounded-lg min-h-48 w-full p-4 '  />
                                    </div>
                                </div>
                            </div>
                        </div>
                </SheetContent>
            </Sheet>
        </>
    )
}
