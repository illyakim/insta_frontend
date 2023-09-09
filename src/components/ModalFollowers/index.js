'use client'
import Image from 'next/image'
import profile from '../../app/images/Profile-Pic-S.png'

export default function ModalFollowers({ close }) {

    return (
        <div className='modal font'>
            <div className='modal-backdrop' onClick={close}></div>
            <div className='modal-followers df'>
                <div className='followers-header df'>
                    <h3>Followers</h3>
                    <button onClick={close}>X</button>
                </div>
                <div className='underline'></div>
                <div className='followers-list df'>
                    <div className='df'>
                        <div className='df follower-details-img'>
                            <Image src={profile} alt='' className='follower-img' />
                            <div className='follower-details'>
                                <p className='follower-name'>azamatov</p>
                                <p className='full-name'>Timur Azamatov</p>
                            </div>
                        </div>
                    </div>
                    <button>Remove</button>
                </div>
            </div>
        </div>
    )
}