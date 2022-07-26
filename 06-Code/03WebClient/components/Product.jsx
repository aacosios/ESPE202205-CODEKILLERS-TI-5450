import { ProductsGrid } from "./ProductsGrid";
import styles from "../styles/product.module.css";

export function Product() {
  return (
    <div>
      <header>
        <h1 className={styles.title}>Products</h1>
      </header>
      <main>
        <ProductsGrid />
      </main>
    </div>
  );
}
