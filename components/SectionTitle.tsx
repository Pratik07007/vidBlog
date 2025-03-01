import React from 'react'

type sectionTitleProp = {
    section: string,
    action: string
}

import { Raleway } from "next/font/google";
const fontRaleway = Raleway({
    subsets: ["latin"],
    weight: "400",
});

function SectionTitle({ section, action }: sectionTitleProp) {
    return (
        <div className={` ${fontRaleway.className} bg-primary-background w-screen py-8`}>
            <div>
                <div className='flex items-center justify-between px-3 sm:px-10 '>
                    <h1 className='text-2xl font-medium text-gray-800'>{section}</h1>
                    <button className=' px-12 py-4 bg-secondary-background rounded-xl  text-primary-background'>{action}</button>
                </div>

            </div>
        </div>
    )
}

export default SectionTitle
