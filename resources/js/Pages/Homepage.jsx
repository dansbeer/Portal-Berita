import React from 'react';
import { Head } from '@inertiajs/inertia-react';
import Navbar from '@/Components/Navbar';
import NewsList from '@/Components/Homepage/NewsList';
import Pagination from '@/Components/Homepage/Pagination';
import Footer from '@/Components/Homepage/Footer';



export default function Homepage(props) {
    // console.log('props :', props);
    return (
        <div className='min-h-screen bg-slate-50 shadow-sm'>
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            <div className='flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch gap-4 my-5 mx-2'>
                <NewsList news={props.news} />
            </div>
            <div className='flex justify-center items-center mt-20 mb-5 shadow-sm'>
                <Pagination meta={props.news.meta} />
            </div>
            <Footer />
        </div>
    )
}
