import Head from 'next/head'
import '../styles.css'



// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return (
    <>
        <Head>
        <title>PairHub</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"/>
        </Head>

        <Component {...pageProps} />
    </>
    )
}