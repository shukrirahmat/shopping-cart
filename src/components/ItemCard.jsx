import PropTypes, { func } from "prop-types";
import styles from "./ItemCard.module.css";
import { useState } from "react";

function ItemCard({ item }) {
  const [amount, setAmount] = useState(1);

  function changeAmount(e) {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setAmount(value);
  }

  function handleBlur() {
    if (!amount) setAmount(1);
    if (amount > 99) setAmount(99);
  }

  function increaseAmount() {
    if (amount < 99) setAmount(amount + 1);
  }

  function decreaseAmount() {
    if (amount > 1) setAmount(amount - 1);
  }

  function handleAdd() {
    //something
  }

  return (
    <div className={styles.card}>
      <p className={styles.cardTitle}>{item.title}</p>
      <img src={item.image}></img>
      <div className={styles.priceandamount}>
        <p className={styles.cardPrice}>{item.price}$</p>
        <div className={styles.amount}>
          <button onClick={decreaseAmount}>-</button>
          <input type="text" value={amount} onBlur={handleBlur} onChange={changeAmount}></input>
          <button onClick={increaseAmount}>+</button>
        </div>
      </div>
      <button className={styles.addtoCart} onClick={handleAdd}>ADD TO CART</button>
    </div>
  );
}

ItemCard.proptypes = {
  item: PropTypes.object,
};

export default ItemCard;
