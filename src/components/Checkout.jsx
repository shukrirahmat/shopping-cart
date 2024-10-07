import styles from "./Checkout.module.css"
import { Link } from "react-router-dom";

function Checkout() {
    return (

    <div className={styles.wrapper}>
        <p>Please enter your bank account number and PIN Code:</p>
        <div className={styles.inputContainer}>
            <label>Account number
            <input type="text" disabled/>
            </label>
            <label>PIN Code
            <input type="text" disabled/>
            </label>
        </div>
        <p>Just kidding! You should not do that.</p>
        <Link className={styles.return} to="/">Return to home</Link>
    </div>
    )
}

export default Checkout;