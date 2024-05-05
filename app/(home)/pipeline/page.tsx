import { Button } from '@/components/ui/button'
import { CiSearch } from "react-icons/ci";
import React from 'react'
import { CarouselComp } from './CarouselComp'
import {ParticipantSheet}  from '@/components/Sheet/ParticipantSheet';
import { DatePickerDemo } from '@/components/Datepicker';
import { Filter } from './Filter';

export default function Pipeline() {
  return (
    <>
      <div className='grid grid-flow-col grid-cols-2 p-8  '>
        <h1 className=' text-3xl font-bold mt-2'>Participant Pipeline</h1>
        <div >
          <input name="search" type='text' placeholder="🔍  Search" className=' p-3 m-2 bg-gray-200 rounded-lg w-[45%] h-10' />
          <Filter/>
          <ParticipantSheet />
        </div>
      </div>
      <div className='p-24'>
        <CarouselComp/>
      </div>
    </>
  )
}
