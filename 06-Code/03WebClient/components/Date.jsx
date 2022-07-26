import styles from "../styles/date.module.css";


const Date = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Client</h1>
      <li className={styles.desc}>
      Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9
      </li>
      <li className={styles.desc}>
      Accept-Language: es-419,es;q=0.9 
      </li>
      <li className={styles.desc}>
      Host: httpbin.org
      </li>
      <li className={styles.desc}>
      origin: 181.188.194.250
      </li>
      <li className={styles.desc}>
      Sec-Ch-Ua: \".Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"103\", \"Chromium\";v=\"103\"
      </li>
      <li className={styles.desc}>
      Sec-Ch-Ua-Platform": "\"Windows\" 
      </li>
      
    </div>
  );
};

export default Date;
