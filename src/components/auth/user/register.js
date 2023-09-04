'use client'

import { useState } from 'react'

import logo from '../../../app/images/logo.png'
import googleplay from '../../../app/images/googleplay.png'
import microsoft from '../../../app/images/microsoft.png'
import loginpage from '../../../app/images/login-page.png'
import Image from 'next/image'
import Link from 'next/link'

export default function UserRegister() {
    return (
        <section className="register-page">
                <div className='container'>
                    <div className="card">
                        <Image src={logo} />
                        <h2>Sign up to see photos and videos from your friends.</h2>
                        <button className="facebook-login">Log in with Facebook</button>
                        <div className='or-line'>
                            <div className='line'></div>
                            <p id="or">or</p>
                            <div className='line'></div>
                        </div>
                        <input className="input" placeholder="Mobile number or e-mail" />
                        <input className="input" placeholder="Full name" />
                        <input className="input" placeholder="Username" />
                        <input className="input" placeholder="Password" />
                        <p>
                            People who use our service may have uploaded your information to Instagram. <a href>Learn more</a>
                        </p>
                        <p>
                            By signing up, you agree to our Terms, Privacy Policy and Cookies Policy.
                        </p>

                        <Link href="register">
                            <button className="primary-button">Sign up</button></Link>
                    </div>
                    <div className="card">
                    <p id="have-account">Have an account? <Link href="login">Log in</Link></p>
                </div>
            </div>
        </section>


    )
}