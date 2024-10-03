import { Link, useParams } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import styles from "./App.module.css";
import "./index.css";
import { useEffect, useState } from "react";

function useItemsData() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products", { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => setItems(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return {items, error, loading}
}

function App() {
  const { name } = useParams();
  const {items, error, loading} = useItemsData();

  if (error)
    return <p className={styles.errortext}>A network error was encountered.</p>;

  return (
    <div className={styles.background}>
      <div className={styles.header}>
        <div className={styles.headWrapper}>
          <p className={styles.logo}>Yangtze</p>
          <nav className={styles.linksWrapper}>
            <Link to="/" className={styles.link}>
              HOME
            </Link>
            <Link to="/shop" className={styles.link}>
              SHOP
            </Link>
            <Link to="/cart" className={styles.link}>
              CART
            </Link>
          </nav>
        </div>
      </div>
      <div>
        {name === "shop" ? <Shop items={items} loading={loading}/> : name === "cart" ? <Cart /> : <Home />}
      </div>
    </div>
  );
}

export default App;
