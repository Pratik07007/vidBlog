import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Facebook, Instagram, Linkedin, Github } from 'lucide-react';

function Footer() {
    return (
        <div className='px-3 sm:px-9 w-screen bg-secondary-background flex items-center justify-center py-8'>
            <div className='flex flex-col gap-7'>
                <div className='sm:font-bold font-medium sm:text-5xl text-lg text-center text-primary-background'>
                    Get our stories delivered From us to your inbox weekly.
                </div>
                <div className='flex flex-col gap-3 items-center'>
                    <div className='flex gap-6'>
                        <input className='sm:w-96 rounded-xl outline-none bg-primary-background text-text-primary px-5 py-3' placeholder='Your Email' type="text" />
                        <button className='sm:px-10 px-2 py-3 hover:bg-amber-50 transition duration-300 hover:text-text-primary hover:border-black border-primary-background border-[1px] rounded-xl text-nowrap text-primary-background'>
                            Subscribe
                        </button>
                    </div>
                    <div>
                        <span className='text-text-secondary-light font-thin text-xl text-center'>
                            Get intresting and engaging stories directly to your inbox. No hastel of opening out website.
                        </span>
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <Link href={"/"}>
                        <div className='cursor-pointer flex items-center justify-center gap-4 bg-primary-background px-5 py-2 rounded-xl'>
                            <Image src={"/logo.png"} alt={'logo'} width={30} height={30} />
                            <span className='text-lg font-medium'>VidBlog</span>
                        </div>
                    </Link>
                </div>
                <div className='flex gap-4 justify-center mt-4'>
                    <Link href="https://www.facebook.com/pratik.dhimal.71" target="_blank" rel="noopener noreferrer">
                        <Facebook className='text-primary-background hover:text-blue-600' />
                    </Link>

                    <Link href="https://www.linkedin.com/in/pratik-dhimal-26a54123a/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className='text-primary-background hover:text-blue-700' />
                    </Link>
                    <Link href="https://github.com/Pratik07007" target="_blank" rel="noopener noreferrer">
                        <Github className='text-primary-background hover:text-gray-800' />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Footer;