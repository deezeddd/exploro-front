import React from "react"
import { TableComponent } from "./Table"

export default async function Dashboard() {
  return (<>
    <div className="bg-slate-50 p-10 font-bold text-3xl">
      <h1>Dashboard</h1>
    </div>

    <div className="p-10">

      <div className="flex mb-4">
        <div className=" border-2 border-slate-100 rounded-lg p-5 w-[35%]">
          <h1 className="text-slate-400 pb-2">Year Total</h1>
          <h1 className="font-bold text-3xl">$45,201</h1>
        </div>
        <div className=" ml-4 border-2 border-slate-100 rounded-lg p-5 w-[35%]">
          <h1 className="text-slate-400 pb-2">Monthly Average</h1>
          <h1 className="font-bold text-3xl">$3,786</h1>
        </div>
      </div>

      <div className="flex mb-8 h-96">
        <div className=" border-2 border-slate-100 rounded-lg p-5 w-[50%] ">
          <h1 className=" text-lime-700 font-mono text-3xl">Some Data Chart 1</h1>
 
        </div>
        <div className=" ml-4 border-2 border-slate-100 rounded-lg p-5 w-[50%]">
          <h1 className="text-orange-400 font-mono text-3xl">Some Data Chart 2</h1>
          <h1 className="font-bold text-3xl"></h1>
        </div>
      </div>

      <div>
        <h1 className="text-3xl font-bold mb-4">Recruitment Cost This Year.</h1>
        <TableComponent />
      </div>

    </div>
  </>)
}