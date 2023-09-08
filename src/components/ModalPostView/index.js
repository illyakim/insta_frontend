import Image from 'next/image'
import MyPost from '../myposts/mypost'
import profile from '../../app/images/Profile-Pic-S.png'
import like from '../../app/images/ActivityFeed.svg'
import comment from '../../app/images/comment.png'
import save from '../../app/images/save.webp'
import emodji from '../../app/images/emodji.png'

export default function ModalPostView({ close, currentPost }) {
    return (
        < div className='modal font' >
            <div className='modal-backdrop' onClick={close}></div>
            <div className='modal-inner-post-view'>
                <div className='modal-post-image'>
                    <Image src={currentPost} alt='' id='modal-post-image' />
                </div>
                <div className='comment-section flex-start'>
                    <div className='post-view-header gap'>
                        <Image src={profile} alt='' />
                        <h3 className='profile-name'>terrylucas</h3>
                    </div>
                    <div className='underline'></div>
                    <div className='post-description gap'>
                        <Image src={profile} alt='' />
                        <div className='flex-column flex-start '>
                            <p>Post description</p>
                            <div className='i'>
                                <i id='i'>1d</i>
                                <i id='i'>See translation</i>
                            </div>
                        </div>
                    </div>
                    <div className='comments container'>
                        <div className='flex-column'>
                            <div className='df'>
                                <h3 className='profile-name'>senalov70</h3>
                                <p className='comment'>Nice</p>
                            </div>
                            <div className='i'>
                                <i id='i'>1d</i>
                                <i className='bold' id='i'>1 like</i>
                                <i className='bold' id='i'>Reply</i>
                            </div>
                        </div>
                    </div>
                    <div className='underline'></div>
                    <div className='insights'>
                        <button>View insights</button>
                        <button>Currently boosted</button>
                    </div>
                    <div className='underline'></div>
                    <div className='post-actions df'>
                        <div className='df gap'>
                            <Image src={like} className='small-icon' alt='' />
                            <Image src={comment} className='small-icon' alt='' />
                        </div>
                        <Image src={save} className='small-icon' alt='' />
                    </div>
                    <div className='liked-by'>
                        <p>Liked by <span className='bold'>senalov070</span> and <span className='bold'>61 others</span></p>
                        <span className='i'>1 DAY AGO</span>
                    </div>
                    <div className='underline'></div>
                    <div className='add-comment df gap'>
                        <div className='df gap'>
                            <Image src={emodji} className='small-icon' alt='' />
                            <input placeholder='Add a comment...'></input>
                        </div>
                        <button className='post-button'>Post</button>
                    </div>
                </div>

            </div>
        </div >
    )
}