"use client"
import React from 'react'
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-white rounded-lg dark:bg-gray-900 m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link href="https://flowbite.com/"
                       className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <Image
                            src="/logo.svg"
                            alt="logo"
                            width={400}
                            height={400} className="h-8"/>
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 justify-evenly dark:text-gray-400">
                        <li>
                            <Link href="#" className="hover:underline me-4 md:me-6">About Us</Link>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Contact Us</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">FAQs</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a
                    href=" https://warespace.com" className="hover:underline">WareSpace™</a>. All Rights Reserved.</span>
            </div>
        </footer>
    )
}
export default Footer
