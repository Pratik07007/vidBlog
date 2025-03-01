import React from 'react'

import { Raleway } from "next/font/google";
const fontRaleway = Raleway({
    subsets: ["latin"],
    weight: "400",
});
function FeaturedPost() {
    return (
        <div className={`${fontRaleway.className} min-h-[80vh] bg-secondary-background flex flex-col sm:flex-row px-5 sm:px-10 items-center justify-center pb-5 gap-5  `}>
            <div className='h-[40vh] sm:h-auto sm:w-[55vw] w-[90vw] pt-5 sm:pt-0 flex '>
                <div className='text-primary-background flex flex-col items-start justify-center gap-5' >
                    <h1 className='font-bold'>Featured Post</h1>
                    <span className='font-bold text-5xl '>
                        How AI will  <br /> Change the Future
                    </span>
                    <p className='font-light text-sm'>The future of AI will see home robots having enhanced intelligence, increased capabilities, and becoming more personal and possibly cute. For example, home robots will overcome navigation, direction</p>
                    <button className='py-4 px-8 bg-primary-background text-text-primary rounded-xl hover:bg-gray-300 transition duration-300'>Read More</button>
                </div>
            </div>
            <div className=' h-[40vh] w-[90vw] sm:w-[45vw]  flex  items-center justify-center '>
                <img className='rounded-xl ' src="https://images.unsplash.com/photo-1678491449021-762a7b999862?q=80&w=3028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt={'main_featured_blog'} />
            </div>
        </div>
    )
}

export default FeaturedPost
