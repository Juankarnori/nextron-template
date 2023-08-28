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
            { title }
        </Head>

        <nav>
            <Navbar />
        </nav>
        <SideMenu />

        <main>
            { children }
        </main>

        <footer>

        </footer>
    </>
  )
}
