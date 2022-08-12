import Image from "next/image";
import styles from "../styles/ItemsDelivery.module.css";

const ItemsDelivery = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/iphone13.png" alt="" width="500" height="500" />
      <h1 className={styles.title}></h1>
      <span className={styles.price}>$1200</span>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
};

export default ItemsDelivery;
