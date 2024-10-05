import { useState } from "react";
import styles from "./Cart.module.css";
import PropTypes, { func } from "prop-types";

function Cart(props) {
    const [itemList, setItemList] = useState([{id: 2, amount: 3},
        {id: 9, amount: 5}
    ]);

    return (
        <div className={styles.wrapper}>
            <p className={styles.title}>Your Shopping Cart</p>
            <div className={styles.cartContainer}>
                {itemList.length === 0 ? <p>Your shopping cart is empty</p> : 
                <p>Not Empty</p>}
            </div>
            <button className={styles.checkout}>Checkout</button>
        </div>
    )
}

Cart.propTypes = {
    items: PropTypes.array,
};

export default Cart;