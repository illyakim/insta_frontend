import MyPost from './mypost'
export default function MyPosts({ posts }) {
    const showPosts = posts.map((item, index) => (<MyPost item={item.src} key={index} />));
    return (<div className='posts'>
        {showPosts}
    </div>)
}