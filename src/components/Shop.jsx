import PropTypes, { func } from "prop-types";
import styles from "./Shop.module.css";

function Shop(props) {
  function createItemCard(item) {
    return (
      <div className={styles.card} key={item.id}>
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

  if (props.loading) {
    return (
      <div className={styles.wrapper}>
        <p className={styles.loadingText}>LOADING...</p>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.category}>
        <p className={styles.categoryHead}>Men's Clothing</p>
        <div className={styles.itemsContainer}>
          {props.items.map((item) => {
            if (item.category == "men's clothing") {
              return createItemCard(item);
            }
          })}
        </div>
      </div>
      <div className={styles.category}>
        <p className={styles.categoryHead}>Women's Clothing</p>
        <div className={styles.itemsContainer}>
        {props.items.map((item) => {
            if (item.category == "women's clothing") {
              return createItemCard(item);
            }
          })}
        </div>
      </div>
      <div className={styles.category}>
        <p className={styles.categoryHead}>Jewelery</p>
        <div className={styles.itemsContainer}>
        {props.items.map((item) => {
            if (item.category == "jewelery") {
              return createItemCard(item);
            }
          })}
        </div>
      </div>
      <div className={styles.category}>
        <p className={styles.categoryHead}>Electronics</p>
        <div className={styles.itemsContainer}>
        {props.items.map((item) => {
            if (item.category == "electronics") {
              return createItemCard(item);
            }
          })}
        </div>
      </div>
    </div>
  );
}

Shop.propTypes = {
  items: PropTypes.array,
  loading: PropTypes.bool,
};

export default Shop;
