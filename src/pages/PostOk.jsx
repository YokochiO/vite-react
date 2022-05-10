import PostContent from '../components/PostContent'

export default function PostOk(props) {
    return (
        <div className="post">
            <h2>{props.title}</h2>
            {props.image && (
                <figure className="eyecatch">
                    <img src={props.image.node.mediaItemUrl} alt="" />
                </figure>
            )}
            <PostContent html={props.content} />
        </div>
    )
}
