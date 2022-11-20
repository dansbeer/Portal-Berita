function IsNews(news) {
    let a = news.news.data
    return (
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-5">
            {a.map((data, i) =>
                <div key={i} className="card lg:card-side bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">{data.title}</h2>
                        <p>{data.description}</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">{data.category}</div>
                            <div className="badge badge-inline">{data.author}</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

function NoNews() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-slate-50">Saat Ini Belum Ada Berita yang tersedia.</div>
    )
}

function NewsList(news) {
    return !news ? NoNews() : IsNews(news)
}

export default NewsList
