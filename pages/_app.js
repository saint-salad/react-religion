import '../styles/globals.css'
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {


  return (
    <Layout theme={"dark"}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
