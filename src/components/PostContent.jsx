export default function PostContent(props) {
    const toHtml = (str) => {
        return {
            __html: str,
        }
    }

    return <div className="post-content" dangerouslySetInnerHTML={toHtml(props.html)}></div>
}
