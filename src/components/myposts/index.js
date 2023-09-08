import MyPost from './mypost'
export default function MyPosts({ posts, onClick }) {
    const showPosts = posts.map((item, index) => (<MyPost onClick={onClick} item={item} key={index} />));
    return (<div className='posts'>
        {showPosts}
    </div>)
}