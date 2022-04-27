import Head from "next/head";
import Navbar from "./Navbar";
import { useEffect } from "react"

interface PageLayoutProps {
    className?: string,
    children?: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ className, children }: PageLayoutProps) => {
    return (<div>
        <Head>
            <title>Nathan Sanchez</title>
            <meta name="description" content="Nathan Sanchez Resume" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="https://use.typekit.net/cbb4avu.css" />
        </Head>
        <Navbar />
        <main className={className}>{children}</main>
    </div>);
};

export default PageLayout;