import {authOptions} from '../../pages/api/auth/[...nextauth]';
import {getServerSession} from 'next-auth'
import './globals.css'
import {Inter} from 'next/font/google'
import SessionProvider from './SessionProvider';
import Login from './Login';
import Logout from './Logout';
import Home from './page';
import Choice from './components/Choice';
import Link from "next/link";
import Logo from "./icons/logo.svg";
import Image from "next/image";


const inter = Inter({subsets: ['latin']})

export default async function RootLayout({
                                             children,
                                         }: {
    children: React.ReactNode
}) {
    const session = await getServerSession(authOptions);
    return (
        <html lang="en">
        <body className={inter.className}>
        <SessionProvider session={session}>
            <header className="header">
                <Link href="/">
                    <Image className="turo-logo" src={Logo} alt="Turo Logo"/>
                </Link>
                <h1 className="turo-main-header text-gray-900 text-3xl font-thin">
                    MenTur Program
                </h1>
                {!session ? (
                    <Login/>
                ) : (
                    <Logout/>
                )}
            </header>
            <div id='content'>
                {!session ? (
                    <Choice/>
                ) : (
                    <Home/>
                )}
            </div>
        </SessionProvider>
        </body>
        </html>
    )
}
