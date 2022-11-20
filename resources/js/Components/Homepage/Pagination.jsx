import { Link } from "@inertiajs/inertia-react"

function Pagination(meta) {

    const prev = meta.meta.links[0].url;
    const next = meta.meta.links[meta.meta.links.length - 1].url;
    const current = meta.meta.current_page;
    return (
        <div className="felx justify-center items-center">
            <div className="btn-group">
                {prev ? <Link href={prev} className="btn">«</Link> : <button className="btn" disabled>«</button>}
                <div href={current} className="btn">{current}</div>
                {next ? <Link href={next} className="btn">»</Link> : <button className="btn" disabled>»</button>}
            </div>
        </div>
    )
}

export default Pagination
