export default function MyPost({ item, onClick }) {
    return (
        <div className="post-sm" onClick={() => onClick(item)}>
            <img src={item.src} alt="" />
        </div>
    )
}