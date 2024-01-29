import Head from "next/head";

import "bootstrap/dist/css/bootstrap.css";
import Header from "../Components/Header/Header";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Nicolas Nasr Portfolio</title>
                <meta name="title" content="Nicolas Nasr Portfolio" />
                <meta name="description" content="A full stack web developer, experience building and testing responsive web/mobile applications." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.nicolasnasr.live/" />
                <meta property="og:title" content="Nicolas Nasr Portfolio" />
                <meta property="og:description" content="A full stack web developer, experience building and testing responsive web/mobile applications." />
                <meta property="og:image" content="/assets/images/IMG_0711.jpg" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.nicolasnasr.live/" />
                <meta property="twitter:title" content="Nicolas Nasr Portfolio" />
                <meta property="twitter:description" content="A full stack web developer, experience building and testing responsive web/mobile applications." />
                <meta property="twitter:image" content="/assets/images/IMG_0711.jpg" />
            </Head>
            <Header />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
