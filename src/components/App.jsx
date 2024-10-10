import { Link, useParams } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import Cart from "./Cart";
import styles from "../styles/App.module.css";
import { useEffect, useState } from "react";
import cartIcon from "../assets/icons/cart-outline.svg";
import "../index.css";
import PropTypes from "prop-types";

function App({items, error, loading, initialPath}) {

  let { name } = useParams();
  if (initialPath) {
    name = initialPath;
  }

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

  function countAllItems() {
    let total = 0;
    cartItems.forEach(i => {
      total = total + i.amount;
    })

    return total;
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
                  <p role="cartNum" className={styles.cartTotal}>{countAllItems()}</p>
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

App.propTypes = {
  items: PropTypes.array,
  error: PropTypes.object,
  loading: PropTypes.bool,
  initialPath: PropTypes.string,
};

export default App;
