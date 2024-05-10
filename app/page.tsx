
import {  ProgressComponent } from "@/components/Progress"
import React from "react"

export default function Home(){
    return (<>
    <div className="p-12">
        <h1 className="text-center text-5xl font-mono text-sky-300 animate-pulse ease-out">Welcome To Exploro!</h1>
       <div className=" pl-80 mt-[20%]"> 
        <ProgressComponent />
       </div>
        <h3 className="text-center mt-[25%] text-xl text-slate-300"> This is the Home Page of Exploro, currently in development</h3>
    </div>
    </>)
}
