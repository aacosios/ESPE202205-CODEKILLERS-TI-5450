import Layout	 from '../components/Layout'
import '../styles/globals.css'
/*import '../styles/index.css'
import '../styles/Footer.module.css'
import '../styles/Home.module.css'
import '../styles/ItemsDelivery.module.css'
import '../styles/ItemsList.module.css'
import '../styles/Navbar.module.css'
*/

function MyApp({ Component, pageProps }) {
  return (
  <Layout> 
    <Component {...pageProps} />
  </Layout>
  );
}

export default MyApp
