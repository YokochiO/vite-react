import { useParams } from 'react-router-dom'
import PostOk from './PostOk'
import fetcher from '../lib/fetcher.js'

export default function Post() {
    const params = useParams()
    const query = `{postBy(postId:${params.postId}){postId,title,content,featuredImage{node{mediaItemUrl}}}}`
    const { data, error } = fetcher(query)

    if (error || data.data.postBy === null) {
        throw new Error('記事が見つからないよ！')
    }

    return (
        <PostOk
            title={data.data.postBy.title}
            image={data.data.postBy.featuredImage}
            content={data.data.postBy.content}
        />
    )
}
