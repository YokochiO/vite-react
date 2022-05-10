import React from 'react'
import { Link } from 'react-router-dom'
import fetcher from '../lib/fetcher.js'

const parseDate = (date) => {
    const zz = (d) => {
        return ('00' + d).slice(-2)
    }
    const d = new Date(date)
    const mm = zz(d.getMonth() + 1)
    const dd = zz(d.getDate())
    return `${d.getFullYear()}年${mm}月${dd}日`
}

export default function Home() {
    const query = '{posts(where:{categoryIn:[1,5]}){edges{node{date,postId,title}}}}'
    const { data, error } = fetcher(query)

    return (
        <div className="page">
            <h2>Home</h2>
            <ul className="post-list">
                {data.data.posts.edges.map((post) => (
                    <li key={post.node.postId}>
                        <Link to={`/post/${post.node.postId}`}>
                            <span className="date">{parseDate(post.node.date)}</span>
                            <h3 className="title">{post.node.title}</h3>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
