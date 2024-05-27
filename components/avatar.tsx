
"use client"

import Image from "next/image";

import { MotionTransition } from "./transition-component";

export function Avatar() {
    return (
        <MotionTransition position="bottom" className="bottom-0 right-0 hidden md:inline-block md:absolute ">
            <Image src="/home-4.png" width="400" height="400" className="w-full h-full " alt="Particles " style={{opacity:'0.2'}} />
        </MotionTransition>
    )
}