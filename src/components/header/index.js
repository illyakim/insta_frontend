'use client'
import { useState } from 'react'
import logo from '../../app/images/Logo.png'
import home from '../../app/images/Home-fill.svg'
import messenger from '../../app/images/Messenger.svg'
import newpost from '../../app/images/NewPosts.svg'
import findpeople from '../../app/images/FindPeople.svg'
import like from '../../app/images/ActivityFeed.svg'
import search from '../../app/images/Search.svg'
import profile from '../../app/images/Profile-Pic-S.png'
import Image from 'next/image'
import ModalNewPost from '@/components/ModalNewPost'

export default function Header() {
    const [modalNewPostIsOpen, setModalNewPostIsOpen] = useState(false)
    const closeModalNewPost = () => {
        setModalNewPostIsOpen(false)
    }
    return (
        <header className='header'>
            <div >
                <div className='header-inner df'>
                    <Image src={logo} />
                    <input className='header-search' placeholder='Search'>
                    </input>
                    {modalNewPostIsOpen && <ModalNewPost close={closeModalNewPost} />}
                    <div className='icons df gap pointer'>
                        <Image src={home} />
                        <Image src={messenger} />
                        <Image src={newpost} onClick={() => setModalNewPostIsOpen(true)} />
                        <Image src={findpeople} />
                        <Image src={like} />
                        <Image src={profile} />
                    </div>
                </div>
                <div className='underline'></div>
            </div>
        </header>
    )
}