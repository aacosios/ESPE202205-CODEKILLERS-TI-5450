import Image from "next/image";
import Link from "next/link"
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/logo_del.png" alt="" width="160px" height="69px" />
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href="/">
          <li className={styles.listItem}>Homepage</li>
         </Link>
          <Link href="/about">
          <li className={styles.listItem}>About Us</li>
          </Link>
          <Link href="/products">
          <li className={styles.listItem}>Products</li>
          </Link>
          <Link href="/papers">
          <li className={styles.listItem}>papers</li>
          </Link>
          <Link href="/publicAPI">
          <li className={styles.listItem}>Public API</li>
          </Link>
          <Link href="/privateAPI">
          <li className={styles.listItem}>Private API</li>
          </Link>
          <Link href="/abstract">
          <li className={styles.listItem}>Abstract</li>
          </Link>
          <Link href="/client_pc">
          <li className={styles.listItem}>Client_PC</li>
          </Link>          
          <Link href="/login">
          <li className={styles.listItem}>login</li>
          </Link>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src="/img/carrito.png" alt="" width="60px" height="60px" />
          <div className={styles.counter}>0</div>
        </div>
      </div>
    </div>
  );
};


export default Navbar;
