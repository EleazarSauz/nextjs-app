import Head from 'next/head'
import '../styles.css'
import NavBar from '../components/NavBar.jsx'


export default function App({ Component, pageProps }) {
    return (
    <>
        <Head>
            <title>PairHub</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="stylesheet" href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"/>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.0/css/all.css"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"/>
        </Head>

        <NavBar/>
        <Component {...pageProps} />

        <footer className="text-center p-3 mt-5">
          made with &nbsp;
          <i className="fa fa-2x fa-heart animate__animated animate__infinite animate__pulse " style={{color: "#ef4e5b"}}></i>
          &nbsp; by: <a href="https://twitter.com/EleazarSauz" target="_blank" rel="noopener noreferrer">@EleazarSauz</a>
        </footer>
    </>
    )
}