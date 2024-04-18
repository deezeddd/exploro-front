import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { PiFinnTheHuman } from "react-icons/pi"

export function CarouselSize() {
    return (
        <Carousel
            opts={{
                align: "start",
            }}
            className=" w-full "
        >
            <CarouselPrevious />
            <CarouselContent>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                        <Card>
                            <CardContent className=" aspect-square font-bold bg-slate-50 p-6">
                                <div>
                                    <div className="font-bold ">
                                        <h1>🆕 Applied</h1>
                                    </div>
                                    <div className=" flex m-2 p-3 bg-white shadow-sm shadow-slate-600 rounded-md">
                                        <div>
                                            <PiFinnTheHuman size={30} />

                                        </div >
                                        <div className="ml-3">
                                            <p className="font-bold">Elise Beverley</p>
                                            <p className=" text-sm text-gray-400">Eligible</p>
                                            <span className="text-xs p-1 rounded-lg bg-gray-200 text-gray-400">Examining the effective...</span>

                                        </div>
                                    </div>
                                    <div className=" flex m-2 p-3 bg-white shadow-sm shadow-slate-600 rounded-md">
                                        <div>
                                            <PiFinnTheHuman size={30} />

                                        </div >
                                        <div className="ml-3">
                                            <p className="font-bold">Elise Beverley</p>
                                            <p className=" text-sm text-gray-400">Eligible</p>
                                            <span className="text-xs p-1 rounded-lg bg-gray-200 text-gray-400">Examining the effective...</span>

                                        </div>
                                    </div>
                                    
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                        <Card>
                            <CardContent className=" aspect-square font-bold bg-slate-50 p-6">
                                <div>
                                    <h1>🕐 Screening</h1>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                        <Card>
                            <CardContent className=" aspect-square font-bold bg-slate-50 p-6">
                                <div>
                                    <h1>🗓️ Enrolled</h1>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                        <Card>
                            <CardContent className=" aspect-square  bg-gray-50 p-6">
                                <div >
                                    <div className="font-bold ">
                                        <h1>👏 Completed</h1>
                                    </div>

                                    <div className=" flex m-2 p-3 bg-white shadow-sm shadow-slate-600 rounded-md">
                                        <div>
                                            <PiFinnTheHuman size={30} />

                                        </div >
                                        <div className="ml-3">
                                            <p className="font-bold">Elise Beverley</p>
                                            <p className=" text-sm text-gray-400">Eligible</p>
                                            <span className="text-xs p-1 rounded-lg bg-gray-200 text-gray-400">Examining the effective...</span>

                                        </div>

                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </CarouselItem>

            </CarouselContent>
            <CarouselNext />
        </Carousel>
    )
}
