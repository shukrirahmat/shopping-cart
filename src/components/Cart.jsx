import styles from "../styles/Cart.module.css";
import PropTypes, { func } from "prop-types";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

function Cart(props) {

    function countOverall(array) {
        let total = 0;
        props.cartItems.forEach(item => {
            total += (item.price * item.amount);
        })
        return total.toFixed(2) + "$";
    }

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Your Shopping Cart</p>
      {props.cartItems.length === 0 ? (
        <p className={styles.emptyText}>Your shopping cart is empty</p>
      ) : (
        <div className={styles.cartContainer}>
          {props.cartItems.map((item) => {
            return <CartItem item={item} key={item.id} removeItem={props.removeItem} modifyAmount={props.modifyAmount}/>;
          })}
        </div>
      )}
      {props.cartItems.length === 0 ? null : (
        <div className={styles.overall}>
            <p>Overall Total : {countOverall()} </p>
          <button className={styles.checkout}><Link className={styles.cotext} to="/checkout">Checkout</Link></button>
        </div>
      )}
    </div>
  );
}

Cart.propTypes = {
  cartItems: PropTypes.array,
  removeItem: PropTypes.func,
  modifyAmount: PropTypes.func
};

export default Cart;
