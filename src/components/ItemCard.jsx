import PropTypes, { func } from "prop-types";
import styles from "./ItemCard.module.css";

function ItemCard({item}) {
    return (
        <div className={styles.card}>
          <p className={styles.cardTitle}>{item.title}</p>
          <img src={item.image}></img>
          <div className={styles.priceandamount}>
            <p className={styles.cardPrice}>{item.price}$</p>
            <div className={styles.amount}>
              <button>-</button>
              <input type="text" value="1"></input>
              <button>+</button>
            </div>
          </div>
          <button className={styles.addtoCart}>ADD TO CART</button>
        </div>
    );
}

ItemCard.proptypes = {
    item: PropTypes.object
}

export default ItemCard;