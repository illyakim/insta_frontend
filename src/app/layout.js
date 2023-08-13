import './globals.css'

export const metadata = {
  title: 'Insta App',
  description: 'Learning react',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
