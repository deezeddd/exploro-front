import { Button } from '@/components/ui/button'
import { CiSearch } from "react-icons/ci";
import React from 'react'
import { CarouselSize } from './Carousel'

export default function Pipeline() {
  return (
    <>
      <div className='grid grid-flow-col grid-cols-2 p-7  '>
        <h1 className=' text-4xl font-bold'>Participant Pipeline</h1>
        <div >
          <input name="search" type='text' placeholder="🔍  Search" className=' p-3 m-2 bg-gray-200 rounded-lg w-[35%] h-10' />
          <select disabled className='btn w-28 h-9 bg-gray-200 p-2 rounded-md text-gray-500 border-r-4'>
            <option defaultChecked> Filter By </option>
            <option value="YO"> YO</option>
          </select>
          <Button className='m-2'>+ New Participant</Button>
        </div>
      </div>
      <div className='p-24'>
        <CarouselSize/>
      </div>
    </>
  )
}
