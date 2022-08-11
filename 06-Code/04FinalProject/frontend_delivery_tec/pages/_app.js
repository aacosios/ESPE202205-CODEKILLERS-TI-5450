import Layout	 from '../components/Layout'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import Product from './product'
import ReactDOM from 'react-dom';

/*import '../styles/index.css'
import '../styles/Footer.module.css'
import '../styles/Home.module.css'
import '../styles/ItemsDelivery.module.css'
import '../styles/ItemsList.module.css'
import '../styles/Navbar.module.css'
*/
import React from 'react';


function MyApp({ Component, pageProps }) {

  return (
  <Layout> 
    <Component {...pageProps} />
  </Layout>

  );


}

reportWebVitals();

export default MyApp
