import { FC, PropsWithChildren } from "react"
import Head from "next/head"
import { Navbar, SideMenu } from "../ui";

interface Props extends PropsWithChildren {
    title: string;
}

export const MainLayout:FC<Props> = ({ title, children }) => {
  return (
    <>
        <Head>
            <title>{title}</title>
        </Head>

        <nav>
            <Navbar />
        </nav>
        <SideMenu />

        <main style={{
            margin: '80px auto',
            maxWidth: '1440px',
            padding: '0px 30px'
        }}
        >
            { children }
        </main>

        <footer>

        </footer>
    </>
  )
}
