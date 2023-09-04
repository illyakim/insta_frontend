import Link from 'next/link'

export default function Home() {
  return (
    <main className='main font'>
      <h1>Welcome to Instagram</h1>
      <Link href='login' className='login-main'>Log in</Link>
    </main>
  )
}
