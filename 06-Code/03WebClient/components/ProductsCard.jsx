import styles from "../styles/ProductsCard.module.css";

export function ProductsCard({ Products }) {
  
  return (
    <li className={styles.ProductsCard}>
      <img
        width={230}
        height={345}
        className={styles.ProductsImage}
        src={Products.img}
        alt={Products.title}
       

      />
      <div>{Products.title}</div>
      <div>{Products.Price}</div>
    </li>
  );
}
