import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

function Header() {
  return (
    <>
      <header className={styles.header}>
        <Link to={"/"} className={styles.logo}>
          <h1>Главная</h1>
        </Link>

      </header>
    </>
  );
}

export default Header;
