import PostContent from '../components/PostContent'
import fetcher from '../lib/fetcher.js'

export default function About() {
    const query = '{pageBy(pageId:52){title,content}}'
    const { data, error } = fetcher(query)

    return (
        <div className="page">
            <h2>{data.data.pageBy.title}</h2>
            <PostContent html={data.data.pageBy.content} />
        </div>
    )
}
