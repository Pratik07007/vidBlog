import Link from 'next/link';
import BlogCard from './BlogCard';
import SectionTitle from './SectionTitle';

export default function RecentPost() {

    return (
        <div className='bg-primary-background w-screen'>
            <SectionTitle action='View All' section='Recent Posts' />
            <div className='flex flex-wrap items-center justify-center px-3 sm:px-10 sm:justify-between'>
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>
        </div>
    );
}