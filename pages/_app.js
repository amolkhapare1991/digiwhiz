import '../styles/custom.css'
import '@splidejs/react-splide/css'
import { Header, Footer } from '../components'
function MyApp({ Component, pageProps }) {
    return (
        <>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </>
    )
}

MyApp.getInitialProps = async()=>{
    return {
        props:{}
    }
}

export default MyApp