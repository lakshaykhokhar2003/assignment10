"use client"

import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu, Phone } from "lucide-react";


const Navbar = () => {
    return (
        <nav className="sticky top-0 py-6 px-10 flex justify-between items-center rounded-md shadow-md bg-white z-50 max-lg:p-4 max-sm:p-2">
            <Image
                src="/logo.svg"
                alt="logo"
                width={400}
                height={400}
                className="w-full max-w-[260px] max-lg:max-w-[160px]"
            />
            <div className="flex items-center gap-10 font-roboto max-lg:gap-4 max-sm:gap-2">
                <div className="text-secondary flex justify-center items-center gap-2">
                    <Phone className="w-6 h-6 max-sm:w-4 max-sm:h-4" fill="currentColor" />
                    <span className="text-lg font-bold max-lg:text-base max-sm:text-sm">470-518-5965</span>
                </div>
                <Link href="#" className="max-sm:hidden">
                    <Button className="cursor-pointer p-7 rounded-md text-lg font-semibold max-lg:p-6 max-lg:text-base">
                        Book a Tour Today
                    </Button>
                </Link>
                <Menu className="w-10 h-10 text-primary hidden max-sm:block" />
            </div>
        </nav>
    )
}

export default Navbar;
