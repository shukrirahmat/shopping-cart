import { Link, useParams } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import styles from "./App.module.css";
import "./index.css";
import { useEffect, useState } from "react";
import cartIcon from "./assets/icons/cart-outline.svg";

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
      .then((response) => {
        //console.log(response);
        setItems(response);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { items, error, loading };
}

function App() {
  const { name } = useParams();
  const { items, error, loading } = useItemsData();
  const [cartItems, setCartItems] = useState([]);

  function addToCart(item, amount) {
    let newList = cartItems.slice();
    let itemExist = false;

    newList = newList.map((e) => {
      if (e.id === item.id) {
        const newamount = e.amount + amount;
        const newItem = { ...e, amount: newamount};
        itemExist = true;
        return newItem;
      } else {
        return e
      }
    });

    if (!itemExist) {
      const newItem = { ...item, amount: amount };
      newList.push(newItem);
    }
    setCartItems(newList);
  }

  function removeItem(id) {
    const newList = cartItems.filter((item) => item.id !== id);
    setCartItems(newList);
  }

  function modifyAmount(id, newAmount) {
    const newList = cartItems.map((e) => {
      if (e.id === id) {
        const newItem = { ...e, amount: newAmount};
        return newItem;
      } else {
        return e
      }
    });
    setCartItems(newList);
  }

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
              <div className={styles.cartIconWrapper}>
                <img className={styles.cartIcon} src={cartIcon}></img>
                {cartItems.length === 0 ? null : (
                  <p className={styles.cartTotal}>{cartItems.length}</p>
                )}
              </div>
            </Link>
          </nav>
        </div>
      </div>
      <div>
        {name === "shop" ? (
          <Shop items={items} loading={loading} addToCart={addToCart} />
        ) : name === "cart" ? (
          <Cart cartItems={cartItems} removeItem={removeItem} modifyAmount={modifyAmount}/>
        ) : (
          <Home />
        )}
      </div>
    </div>
  );
}

export default App;
