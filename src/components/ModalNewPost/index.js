import newpost from '../../app/images/new-post.jpg'
import Image from 'next/image'

export default function ModalNewPost({ close }) {
    return (
        <div className='modal font'>
            <div className='modal-backdrop' onClick={close}></div>
            <div className='modal-inner-new-post'>
                <h3>Create new post</h3>
                <div className='underline'></div>
                <div className="drag-photos-area">
                    <Image src={newpost} className='new-post-img' />
                    <h3>Drag photos and videos here</h3>
                    <button className='button primary-button new-post'>Select from computer</button>
                </div>
            </div>
        </div>
    )
}