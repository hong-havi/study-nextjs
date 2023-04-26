import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import LoginBtn from './LoginBtn'
import LogoutBtn from './LogoutBtn'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({ children }) {
  let session = await getServerSession(authOptions)


  return (
    <html lang="en">
      <body className={inter.className}>
          <div className="NavBar">
            <Link href="/" className="NavButton">홈</Link>
            <Link href="/list" className="NavButton">리스트</Link>&nbsp;
            <Link href="/write" className="NavButton">글작성</Link>&nbsp;
            <Link href="/api/list" className="NavButton">리스트API</Link>&nbsp;
            <Link href="/register" className="NavButton">회원가입</Link>
            { 
              ( session?.user.name ) ? 
                <LogoutBtn ></LogoutBtn> : <LoginBtn ></LoginBtn>
            }     
          </div>
        {children}
      </body>
    </html>
  )
}
