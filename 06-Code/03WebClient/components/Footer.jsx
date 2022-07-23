import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/footer_del.jpg" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            FIRST DELIVERY OF TECHNOLOGY IN QUITO.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR TECH STORE</h1>
          <p className={styles.text}>
            Guayaquil Oe3-28 y Oriente
            <br /> (593) 2587-410
            <br /> (593) 987547422
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>CUSTOMER SERVICE HOURS </h1>
          <p className={styles.text}>
            MONDAY - FRIDAY
            <br /> 9:00 – 20:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY - HOLIDAYS
            <br /> 10:00 – 15:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
