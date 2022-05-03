import Layout from "../components/Layout";
import "../public/fonts/fonts.css";
import "../styles/globals.css";
import "../styles/var.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
