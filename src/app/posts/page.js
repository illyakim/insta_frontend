import Header from '../../components/header'
import MyPosts from '@/components/myposts'

import profile from '../images/Profile-Pic-M.png'
import more from '../images/More.svg'
import post1 from '../images/post1.png'
import post2 from '../images/post2.png'
import post3 from '../images/post3.png'
import post4 from '../images/post4.png'
import post5 from '../images/post5.png'
import post6 from '../images/post6.png'
import Image from 'next/image'

// const posts = [post1, post2, post3, post4, post5, post6]

export default function PostsPage() {
    return (
        <main>
            <Header />
            <div className='font'>
                <div className='profile-details df'>
                    <Image src={profile} className='marg' />
                    <div>
                        <div className='df gap2'>
                            <h3 className='profile-name'>terrylucas</h3>
                            <button className='follow-button'>Follow</button>
                            <Image src={more} className='pointer' />
                        </div>
                        <p className='full-name'>Terry Lucas</p>
                    </div>
                </div>
                <div className='underline'></div>
                <div>
                    {/* <MyPosts posts={posts} /> */}
                </div>
            </div>
        </main>
    )
}