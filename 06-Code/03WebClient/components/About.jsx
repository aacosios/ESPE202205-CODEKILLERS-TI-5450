import React from 'react';
import Image from 'next/image';
import styles from "../styles/about.module.css";
import deliv from "../public/img/deliv.png";

export function About() {
  return (
    <div>

<header>
        <h1 className={styles.title}>About us </h1>
      </header>
      <Image public={deliv} alt="delivery"></Image>
        <body>
<font size="6"> Nuestro objetivo es apoyar a la economía ecuatoriana 
cuando inician o experimentan una transformación tecnológica importante.
Si pensabas que los delivery solo hacían entrega de comida, pues 
¡estás equivocado! Si algo sabemos es que la pandemia ha incrementado 
y brotado las ideas de todos para hacer emprendimientos innovadores. 
Uno de ellos son los delivery de tecnología. 
.</font>
        </body>
      

    </div>
  );
}