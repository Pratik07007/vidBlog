import Image from 'next/image'
import React from 'react'
import { Menu, Search } from 'lucide-react';

import { Raleway } from "next/font/google";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link';



const fontRaleway = Raleway({
    subsets: ["latin"],
    weight: "400",
});

function NavBar() {
    return (
        <div className={` ${fontRaleway.className} px-4 sm:px-25 h-16 bg-primary-background flex justify-between`}>
            <Link className=' cursor-pointer flex items-center justify-center gap-4' href={"/"}>
                <Image src={"/logo.png"} alt={'hello'} width={30} height={30}></Image>
                <span className='text-lg font-extrabold'>VidBlog</span>
            </Link>
            <div className='hidden sm:flex items-center justify-center gap-10 text-4'>
                <span className='cursor-pointer' >Blog</span>
                <span className='cursor-pointer' >About</span>
                <Search />
                <button className='px-12 py-4 bg-secondary-background rounded-xl text-primary-background'>Contact Us</button>
            </div>
            <div className='sm:hidden flex items-center justify-center'>
                <Sheet>
                    <SheetTrigger><Menu /></SheetTrigger>
                    <SheetContent className='bg-primary-background pt-10'>

                        <SheetHeader>
                            <SheetTitle className=' h-18 px-4 py-2 bg-secondary-background text-primary-background transition duration-200 hover:bg-purple-600 hover:text-gray-300 cursor-pointer rounded-xl'>Blogs</SheetTitle>
                            <SheetTitle className=' h-18 px-4 py-2 bg-secondary-background text-primary-background transition duration-200 hover:bg-purple-600 hover:text-gray-300 cursor-pointer rounded-xl'>About Us</SheetTitle>
                            <SheetTitle className=' h-18 px-4 py-2 bg-secondary-background text-primary-background transition duration-200 hover:bg-purple-600 hover:text-gray-300 cursor-pointer rounded-xl'>Contact Us</SheetTitle>
                            <div className='flex h-18 items-center gap-5 justify-start px-4 py-2 bg-secondary-background text-primary-background transition duration-200 hover:bg-purple-600 hover:text-gray-300 cursor-pointer rounded-xl '>
                                <input className='outline-none border-[1px] px-3 py-2 placeholder:text-black' type="text" placeholder='Search...' />
                                <SheetTitle className=''><Search size={20} /></SheetTitle>
                            </div>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>

        </div>
    )
}

export default NavBar
