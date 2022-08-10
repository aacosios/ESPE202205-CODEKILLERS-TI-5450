import styles from "../styles/background.module.css";


const background = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>LINKS TO THE PAPERS</h1>
      <p className={styles.desc}>
      Choose a paper according to its number
        or if this is a mobile interface, 
           click on the hamburger icon 
           to display the papers menu.
      </p>
      <p className={styles.desc}>
      ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
      ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
      </p>
    </div>
  );
};

export default background;
