import { ProductsCard } from "./ProductsCard";
import Products from "./Products.json";
import styles from "../styles/ProductsGrid.module.css";

export function ProductsGrid() {
  return (
    <ul className={styles.ProductsGrid}>
      {Products.map((Products) => (
        <ProductsCard key={Products.id} Products={Products} />
      ))}
    </ul>
  );
}
