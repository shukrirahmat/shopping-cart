import styles from "../styles/CartItem.module.css";
import PropTypes, { func } from "prop-types";

function CartItem({ item , removeItem, modifyAmount}) {

  function pricetoString(price) {
    return price.toFixed(2) + "$";
  }

  function removeClick() {
    removeItem(item.id);
  }

  function handleChange(e) {
    const value = e.target.value.replace(/[^0-9]/g, "");
    let num;
    if (!value) num = 0;
    else num = parseInt(value);
    if (num !== item.amount) {
        modifyAmount(item.id, num);
    }
  }

  function handleAdd() {
    modifyAmount(item.id, item.amount + 1);
  }

  function handleReduce() {
    if (item.amount > 1) modifyAmount(item.id, item.amount - 1);
  }

  return (
    <div className={styles.container}>
      <p className={styles.title}>{item.title}</p>
      <div className={styles.imageContainer}>
        <img src={item.image}></img>
      </div>
      <div className={styles.amount}>
        <button onClick={handleReduce}>-</button>
        <input type="text" value={item.amount} onChange={handleChange}></input>
        <button onClick={handleAdd}>+</button>
      </div>
      <div className={styles.priceContainer}>
        <p>Price: {pricetoString(item.price)}</p>
        <p>Total: {pricetoString(item.price * item.amount)}</p>
      </div>
      <button className={styles.removeButton} onClick={removeClick}>Remove</button>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.object,
  removeItem: PropTypes.func,
  modifyAmount: PropTypes.func
};

export default CartItem;
