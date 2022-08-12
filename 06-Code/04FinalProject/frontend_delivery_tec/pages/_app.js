import Layout	 from '../components/Layout'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import Product from './product'
import ReactDOM from 'react-dom';


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
