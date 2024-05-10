"use client"

import * as React from "react"

import { Progress } from "@/components/ui/progress"

import { useEffect } from "react"

export function ProgressComponent() {
  const [progress, setProgress] = React.useState(10)
useEffect(() => {
    const timer = setInterval(() => {
      // Increment progress by 33% until it reaches 99%
      setProgress(prevProgress => (prevProgress >=120 ? 0 : prevProgress + 25));
    }, 700); // Update progress every 700 milliseconds

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(timer);
  }, []); // Empty dependency array ensures the effect runs only once




  return <Progress value={progress} className="w-[60%]" />
}
