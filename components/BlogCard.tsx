import { Raleway } from 'next/font/google';
import Image from 'next/image';
import React from 'react';

const fontRaleway = Raleway({
    subsets: ["latin"],
    weight: "400",
});

type BlogCardProps = {
    size?: string;
};

function BlogCard({ size }: BlogCardProps) {
    const isLarge = size === "large";

    return (
        <div
            className={`
        ${fontRaleway.className} 
        ${isLarge ?
                    'flex flex-col sm:flex-row sm:w-screen border-[1px] p-2 shadow-secondary-background shadow-2xl' :
                    'flex flex-col w-[90vw] sm:w-[30vw]'
                } 
        min-h-[50vh] mb-4 gap-4
    `}
        >
            <Image
                className={`${isLarge ? 'w-full sm:w-1/2' : 'w-full'} rounded-xl`}
                src="/FeaturedBottomImage.png"
                alt="Main"
                width={300}
                height={300}
            />
            <div className={`${isLarge ? 'w-full sm:w-1/2 sm:text-xl' : 'w-full'} flex flex-col gap-3 items-start justify-center`}>
                <div className='flex items-start gap-3'>
                    <span className='text-text-primary text-[13px] font-thin'>Pratik Dhimal</span>
                    <span className='text-text-secondary-light text-[13px] font-thin'>13 March, 2024</span>
                </div>
                <span className='font-bold text-xl'>8 Rules of Travelling In Sea You Need To Know</span>
                <p className='font-extralight text-xs text-text-secondary-light'>
                    Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include: you can ship large volumes at costs....
                </p>
                <span className='text-secondary-background cursor-pointer hover:underline'>
                    Read More
                </span>
            </div>
        </div>
    );
}

export default BlogCard;