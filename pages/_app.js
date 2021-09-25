import Head from "next/head";

import "bootstrap/dist/css/bootstrap.css";
import Header from "../Components/Header/Header";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Nicolas Nasr Portfolio</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Header />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
