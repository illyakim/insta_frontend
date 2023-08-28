import MyPost from './mypost'
export default function MyPosts({ posts }) {
    const showPosts = posts.map(item => (<MyPost item={item} />));

    return (<div>
        {showPosts}
    </div>)
}