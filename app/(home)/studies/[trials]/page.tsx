import { Button } from '@/components/ui/button'
import React from 'react'
import BreadcrumbTrials from './BreadCrumbTrials'

export default function Trials() {

  return (
    <>
      <div className='p-12  '>
        <div>
          <BreadcrumbTrials />
        </div>
        <div>
          <h1 className='text-3xl font-bold mt-3'>Clinical Trials</h1>
        </div>
        <div className="flex justify-between mt-8">
          <div className=' border-2 border-neutral-100 rounded-lg p-4 w-80 '>
            <h1 className='text-neutral-500 font-bold'>Candidates</h1>
            <h2 className='font-bold text-3xl'>0</h2>
          </div>
          <div className=' border-2 border-neutral-100 rounded-lg p-4 w-80 '>
            <h1 className='text-neutral-500 font-bold'>Active Positions</h1>
            <h2 className='font-bold text-3xl'>0</h2>
          </div>
          <div className=' border-2 border-neutral-100 rounded-lg p-4 w-80 '>
            <h1 className='text-neutral-500 font-bold'>Inactive Positions</h1>
            <h2 className='font-bold text-3xl'>0</h2>
          </div>
        </div>
        <div>
          <div className='grid grid-flow-col grid-cols-2 mt-10 '>
            <div >
              <h1 className=' text-3xl font-bold'> Positions</h1>
            </div>
            <div className='text-end'>
              <input name="search" type='text' placeholder="🔍  Search" className=' p-3 m-2 bg-gray-200 rounded-lg w-[40%] h-10' />
              <Button className='m-1 p-3'>+ NEW</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
