'use client'

import logo from '../../app/images/Logo.png'
import home from '../../app/images/Home-fill.svg'
import messenger from '../../app/images/Messenger.svg'
import newpost from '../../app/images/NewPosts.svg'
import findpeople from '../../app/images/FindPeople.svg'
import like from '../../app/images/ActivityFeed.svg'
import search from '../../app/images/Search.svg'
import profile from '../../app/images/Profile-Pic-S.png'
import Image from 'next/image'

export default function Header() {
    return (
        <header className='header'>
            <div >
                <div className='header-inner df'>
                    <Image src={logo} />
                    <input className='header-search' placeholder='Search'>
                    </input>
                    <div className='icons df gap'>
                        <Image src={home} />
                        <Image src={messenger} />
                        <Image src={newpost} />
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