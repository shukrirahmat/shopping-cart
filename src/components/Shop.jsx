import PropTypes, { func } from "prop-types";
import styles from "./Shop.module.css";
import ItemCard from "./ItemCard";

function Shop(props) {

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
              return <ItemCard item={item} key={item.id} addToCart={props.addToCart}/>;
            }
          })}
        </div>
      </div>
      <div className={styles.category}>
        <p className={styles.categoryHead}>Women's Clothing</p>
        <div className={styles.itemsContainer}>
        {props.items.map((item) => {
            if (item.category == "women's clothing") {
              return <ItemCard item={item} key={item.id} addToCart={props.addToCart}/>;
            }
          })}
        </div>
      </div>
      <div className={styles.category}>
        <p className={styles.categoryHead}>Jewelery</p>
        <div className={styles.itemsContainer}>
        {props.items.map((item) => {
            if (item.category == "jewelery") {
              return <ItemCard item={item} key={item.id} addToCart={props.addToCart}/>;
            }
          })}
        </div>
      </div>
      <div className={styles.category}>
        <p className={styles.categoryHead}>Electronics</p>
        <div className={styles.itemsContainer}>
        {props.items.map((item) => {
            if (item.category == "electronics") {
              return <ItemCard item={item} key={item.id} addToCart={props.addToCart}/>;
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
  addToCart: PropTypes.func,
};

export default Shop;
