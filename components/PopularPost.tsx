import React from 'react'
import SectionTitle from './SectionTitle'
import BlogCard from './BlogCard'

function PopularPost() {
    return (
        <div className='flex flex-col gap-4'>
            <SectionTitle action='View All' section='Popular Post' />
            <div className='flex flex-wrap items-center justify-center px-3 sm:px-10 sm:justify-between'>
                <BlogCard size='large' />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>
        </div>
    )
}

export default PopularPost
