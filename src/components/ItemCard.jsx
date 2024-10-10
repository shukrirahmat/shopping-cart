import PropTypes, { func } from "prop-types";
import styles from "../styles/ItemCard.module.css";
import { useState } from "react";

function ItemCard({ item , addToCart}) {
  const [amount, setAmount] = useState(1);

  function changeAmount(e) {
    const value = e.target.value.replace(/[^0-9]/g, "");
    let num;
    if (!value) num = 0; 
    else num = parseInt(value);
    setAmount(num);
  }

  function increaseAmount() {
    if (amount < 99) setAmount(amount + 1);
  }

  function decreaseAmount() {
    if (amount > 1) setAmount(amount - 1);
  }

  function handleAdd() {
    if (amount >= 1) {
      addToCart(item, amount);
    }
  }

  function pricetoString(price) {
    return price.toFixed(2) + "$";
  }

  return (
    <div className={styles.card}>
      <p className={styles.cardTitle}>{item.title}</p>
      <img src={item.image}></img>
      <div className={styles.priceandamount}>
        <p role="priceTag" className={styles.cardPrice}>{pricetoString(item.price * amount)}</p>
        <div className={styles.amount}>
          <button onClick={decreaseAmount}>-</button>
          <input type="text" value={amount} onChange={changeAmount}></input>
          <button onClick={increaseAmount}>+</button>
        </div>
      </div>
      <button className={styles.addtoCart} onClick={handleAdd} disabled={amount < 1}>ADD TO CART</button>
    </div>
  );
}

ItemCard.proptypes = {
  item: PropTypes.object,
  addToCart: PropTypes.func,
};

export default ItemCard;
