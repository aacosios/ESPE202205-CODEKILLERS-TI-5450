import React from 'react';
import styles from "../styles/about.module.css";
import deliv from "../public/img/deliv.png";

export function About() {
  return (
    <div>

<header>
        <h1 className={styles.title}>About us </h1>
      </header>
      <img public={deliv}/>
        <body>
<font size="6">"Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo 
inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
 sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
 Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, 
 adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore 
 magnam aliquam quaerat voluptatem.</font>
        </body>
      
      

      
      

    </div>
  );
}