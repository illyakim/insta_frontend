'use client'

import logo from '../../../app/images/logo.png'
import googleplay from '../../../app/images/googleplay.png'
import microsoft from '../../../app/images/microsoft.png'
import loginpage from '../../../app/images/login-page.png'
import Image from 'next/image'
import Link from 'next/link'

export default function UserLogin() {
    return (
        <section>
            <div className='login-page df'>
                <div className='login-img' >
                    <Image src={loginpage} />
                </div>
                <div className='flex-column'>
                    <div>
                        <div className="card">
                            <Image src={logo} className='login-logo' />
                            <div>
                                <input className="input" placeholder="Phone number" />
                                <input className="input" placeholder="Password" />
                                <button className="button primary-button">Log in</button>
                                <div className='or-line'>
                                    <div className='line'></div>
                                    <p id="or">or</p>
                                    <div className='line'></div>
                                </div>
                                <a href>Log in with Facebook</a>
                                <a href>Forgot password?</a>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <p id="have-account">Don't have an account? <Link href="register">Sign up</Link></p>
                    </div>
                </div>
            </div>
        </section>
    )
}