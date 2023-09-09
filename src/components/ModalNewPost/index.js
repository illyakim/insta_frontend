'use client'
import { useState, useRef } from 'react'
import newpost from '../../app/images/new-post.jpg'
import Image from 'next/image'
import profile from '../../app/images/Profile-Pic-S.png'
import emodji from '../../app/images/emodji.png'

export default function ModalNewPost({ close }) {
    const [step, setStep] = useState(1)
    const inputRef = useRef(null)
    const [image, setImage] = useState("")
    const handleImageClick = () => {
        inputRef.current.click()
    }
    const handleImageChange = e => {
        const file = e.target.files[0]
        console.log(file)
        setImage(e.target.files[0])
    }

    const [count, setCount] = useState(0)
    const recalculate = e => {
        setCount(e.target.value.length);
    };

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
                            <label>
                                <input type="file" name="image" ref={inputRef} onChange={handleImageChange} onClick={handleImageClick} accept="image/*" />
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
                    <img src={URL.createObjectURL(image)} id='image-edit' alt="" />
                    <div>
                        <div className='post-view-header gap'>
                            <Image src={profile} alt='' />
                            <h3 className='profile-name'>terrylucas</h3>
                        </div>
                        <textarea type="text" placeholder='Write a caption...' className='caption' onChange={recalculate}></textarea>
                        <div className='df space-between'>
                            <Image src={emodji} className='small-icon' alt='' />
                            <span id='i'>{count}/2,200</span>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    )
}
