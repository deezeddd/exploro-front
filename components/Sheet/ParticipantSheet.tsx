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
import { Filter } from '@/components/Filter'



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
                    <form action="participant">

                        <div className='p-3 rounded-lg'>
                            <div className=' p-3 border-2 border-slate-100 rounded-lg' >
                                <h1 className='p-2 font-bold text-2xl'>Participant Info</h1>
                                <div className="p-3">
                                    <div className='mb-4' >
                                        <h1 className='font-bold mb-2 '>Name</h1>
                                        <div >
                                            <input name='name' className='bg-gray-100 rounded-lg p-4 min-h-10 w-full'></input>
                                        </div>
                                    </div>
                                    <div className='mb-4' >
                                        <h1 className='font-bold mb-2 '>Email</h1>
                                        <div >
                                            <input name='email' className='bg-gray-100 rounded-lg p-4 min-h-10 w-full'></input>
                                        </div>
                                    </div>
                                    <div className='mb-4' >
                                        <h1 className='font-bold mb-2 '>Photo</h1>
                                        <div >
                                            <input name='photo' className='bg-gray-100 rounded-lg p-4 min-h-10 w-full'></input>
                                        </div>
                                    </div>
                                    <div className='mb-4' >
                                        <h1 className='font-bold mb-2 '>Phone</h1>
                                        <div >
                                            <input name='phone' className='bg-gray-100 rounded-lg p-4 min-h-10 w-full'></input>
                                        </div>
                                    </div>
                                    <div className='mb-4' >
                                        <h1 className='font-bold mb-2 '>Resume Link</h1>
                                        <div >
                                            <input name='link' className='bg-gray-100 rounded-lg p-4 min-h-10 w-full'></input>
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
                                        <div className=' '>
                                            <Filter className="bg-gray-100 rounded-lg p-4 min-h-10 " />
                                            {/* TODO => Filter */}
                                        </div>
                                    </div>

                                    <div >
                                        <h1 className='font-bold mb-2'>Notes</h1>
                                        <div className=' bg-gray-100 rounded-lg min-h-48' >
                                            <textarea name='notes' className='bg-gray-100 rounded-lg min-h-48 w-full p-4 ' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </SheetContent>
            </Sheet>
        </>
    )
}
