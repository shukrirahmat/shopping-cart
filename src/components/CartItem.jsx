import styles from "./CartItem.module.css";
import PropTypes, { func } from "prop-types";

function CartItem({ item }) {

  function pricetoString(price) {
    return price.toFixed(2) + "$";
  }
  return (
    <div className={styles.container}>
      <p className={styles.title}>{item.title}</p>
      <div className={styles.imageContainer}>
        <img src={item.image}></img>
      </div>
      <div className={styles.amount}>
        <button>-</button>
        <input type="text" value={item.amount}></input>
        <button>+</button>
      </div>
      <div className={styles.priceContainer}>
        <p>Price: {pricetoString(item.price)}</p>
        <p>Total: {pricetoString(item.price * item.amount)}</p>
      </div>
      <button className={styles.removeButton}>Remove</button>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.object,
};

export default CartItem;
