import Footer from "@/Components/Homepage/Footer"
import Navbar from "@/Components/Navbar"
import { Inertia } from "@inertiajs/inertia";
import { Head } from "@inertiajs/inertia-react"
import { useState } from "react";



export default function EditNews(props) {

    console.log(props)

    const handleSubmit = () => {
        const data = {
            id: props.myNews.id, title, description, category
        }

        Inertia.post('/news/update', data)
        setTitle('')
        setDescription('')
        setCategory('')
    }

    const [title, setTitle] = useState(props.myNews.title);
    const [description, setDescription] = useState(props.myNews.description);
    const [category, setCategory] = useState(props.myNews.category);


    return (
        <div className='min-h-screen bg-slate-50 shadow-sm'>
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 my-4">
                <div className='p-6 bg-white border-b border-gray-200 rounded shadow-md'>
                    <input type="text" placeholder="Title" className="input input-bordered w-full m-2" onChange={(title) => setTitle(title.target.value)} defaultValue={props.myNews.title} />
                    <input type="text" placeholder="Description" className="input input-bordered w-full m-2" onChange={(description) => setDescription(description.target.value)} defaultValue={props.myNews.description} />
                    <input type="text" placeholder="Category" className="input input-bordered w-full m-2" onChange={(category) => setCategory(category.target.value)} defaultValue={props.myNews.category} />
                    <button className=" m-2 btn btn-primary" onClick={() => handleSubmit()}>UPDATE</button>
                </div>
            </div>
            <div className="footer items-center p-4 bg-inherit text-inherit-content fixed bottom-0">
                <Footer />
            </div>
        </div >
    )
}
