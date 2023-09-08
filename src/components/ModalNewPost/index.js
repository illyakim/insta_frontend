'use client'
import { useState } from 'react'
import newpost from '../../app/images/new-post.jpg'
import Image from 'next/image'
import tree from '../../app/images/tree.jpg'
import profile from '../../app/images/Profile-Pic-S.png'
import emodji from '../../app/images/emodji.png'

export default function ModalNewPost({ close }) {
    const [step, setStep] = useState(1)
    return (
        <div className='modal font'>
            <div className='modal-backdrop' onClick={close}></div>
            {step === 1 &&
            <div className='modal-inner-new-post'>
                <h3>Create new post</h3>
                <div className='underline'></div>
                <div className="drag-photos-area">
                    <Image src={newpost} className='new-post-img' />
                    <h3>Drag photos and videos here</h3>
                        <div>
                            <label class="button primary-button new-post pointer">
                                <input type="file" name="image" hidden />
                                <span>Select from computer</span>
                            </label>
                        </div>
                        <button className='button' onClick={() => setStep(2)}>Next</button>
                    </div>
                </div>}
            {step === 2 && <div className='modal-inner-new-post'>
                <div className='df'>
                    <h3>Create new post</h3>
                    <div id="share">
                        <button className='share font'>Share</button>
                    </div>
                </div>
                <div className='underline'></div>
                <div className='df image-edit'>
                    <Image src={tree} id='image-edit' />
                    <div>
                        <div className='post-view-header gap'>
                            <Image src={profile} alt='' />
                            <h3 className='profile-name'>terrylucas</h3>
                        </div>
                        <textarea placeholder='Write a caption...' className='caption'></textarea>
                        <div className='df space-between'>
                            <Image src={emodji} className='small-icon' alt='' />
                            <span id='i'>0/2,200</span>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    )
}
