import React, { useState, useEffect } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link, Head } from '@inertiajs/inertia-react';
import Footer from '@/Components/Homepage/Footer';
import { Inertia } from '@inertiajs/inertia';




export default function Dashboard(props) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [isNotif, setIsNotif] = useState(false);

    const handleSubmit = () => {
        const data = {
            title, description, category
        }

        Inertia.post('/news', data)
        setIsNotif(true)
        setTitle('')
        setDescription('')
        setCategory('')
    }

    useEffect(() => {
        if (!props.myNews) {
            Inertia.get('news')
        }
        return;
    }, [])


    return (
        <div>
            <AuthenticatedLayout
                auth={props.auth}
                errors={props.errors}
                header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
            >
                <Head title="Dashboard" />

                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className='p-6 bg-white border-b border-gray-200 rounded shadow-md'>
                            {isNotif && <div className="alert alert-success shadow-lg">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    <span>{props.flash.message}</span>
                                </div>
                            </div>
                            }
                            <input type="text" placeholder="Title" className="input input-bordered w-full m-2" onChange={(title) => setTitle(title.target.value)} value={title} />
                            <input type="text" placeholder="Description" className="input input-bordered w-full m-2" onChange={(description) => setDescription(description.target.value)} value={description} />
                            <input type="text" placeholder="Category" className="input input-bordered w-full m-2" onChange={(category) => setCategory(category.target.value)} value={category} />
                            <button className=" m-2 btn btn-primary" onClick={() => handleSubmit()}>Submit</button>
                        </div>
                    </div>
                </div>
                {props.myNews && props.myNews.length > 0 ? props.myNews.map((news, i) => {
                    return (
                        <div key={i} className='max-w-7xl mx-auto sm:px-4 lg:px-4 mb-4'>
                            <div className="gap-3 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-5">
                                <div className="card lg:card-side bg-base-100 shadow-xl">
                                    <div className="card-body">
                                        <h2 className="card-title">{news.title}</h2>
                                        <p>{news.description}</p>
                                        <div className="card-actions justify-end">
                                            <div className="badge badge-outline">{news.category}</div>
                                            <div className="badge badge-inline">
                                                <Link href={route('edit.news')} method="get" as="button" data={{ id: news.id }}>
                                                    edit
                                                </Link>
                                            </div>
                                            <div className="badge badge-inline">
                                                <Link href={route('delete.news')} method="post" as="button" data={{ id: news.id }}>
                                                    delete
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }) : <p>Anda belum memiliki berita.</p>}

                <Footer />
            </AuthenticatedLayout >
        </div >
    );
}
