import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu, Phone } from "lucide-react";

const Navbar = () => {
    return (
        <div className="sticky top-0 py-6 px-10 flex justify-between items-center rounded-md shadow-md bg-white z-50 max-lg:p-4">
            <Image
                src="/logo.svg"
                alt="logo"
                width={400}
                height={400}
                className="w-full max-w-[260px] max-lg:max-w-[160px]"
            />
            <div className="flex items-center gap-10 font-roboto max-lg:gap-4">
                <div className="flex justify-center items-center gap-2">
                    <Phone className="w-6 h-6" fill="currentColor" />
                    <span className="text-lg font-bold max-lg:text-base">470-518-5965</span>
                </div>
                <Link href="#" className="max-sm:hidden">
                    <Button className="cursor-pointer p-7 rounded-md text-lg font-semibold max-lg:p-6 max-lg:text-base">
                        Book a Tour Today
                    </Button>
                </Link>
                <Menu className="w-10 h-10 text-primary hidden max-sm:block" />
            </div>
        </div>
    )
}

export default Navbar;
