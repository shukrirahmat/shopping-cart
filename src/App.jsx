import { Link, useParams } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import styles from "./App.module.css";

function App() {
  const { name } = useParams();

  return (
    <div className={styles.background}>
      <div className={styles.header}>
        <div className={styles.headWrapper}>
        <p className={styles.logo}>Yangtze</p>
        <nav className={styles.linksWrapper}>
          <Link to="/" className={styles.link}>HOME</Link>
          <Link to="/shop" className={styles.link}>SHOP</Link>
          <Link to="/cart" className={styles.link}>CART</Link>
        </nav>
        </div>
      </div>
      <div>
        {name === "shop" ? <Shop /> : name === "cart" ? <Cart /> : <Home />}
      </div>
    </div>
  );
}

export default App;
