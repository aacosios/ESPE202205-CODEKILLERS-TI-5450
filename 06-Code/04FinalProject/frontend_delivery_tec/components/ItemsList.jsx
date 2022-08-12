import styles from "../styles/ItemsList.module.css";
import ItemsDelivery from "./ItemsDelivery"

const ItemsList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>DELIVERY TEAM 2</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <div className={styles.wrapper}>
          <ItemsDelivery/>
          <ItemsDelivery/>
          <ItemsDelivery/>
          <ItemsDelivery/>
          <ItemsDelivery/>
          <ItemsDelivery/>
          <ItemsDelivery/>
          <ItemsDelivery/>
      </div>
    </div>
  );
};

export default ItemsList;
