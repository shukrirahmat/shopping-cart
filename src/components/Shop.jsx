import PropTypes from "prop-types";
import styles from "./Shop.module.css";

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
      <div className={styles.itemContainer}>
        {props.items.map((item) => {
            return (
                <div className={styles.itemCard} key={item.id}>
                    <p>{item.title}</p>
                    <img src={item.image}></img>
                </div>
            )
        })}
      </div>
    </div>
  );
}

Shop.propTypes = {
  items: PropTypes.array,
  loading: PropTypes.bool,
};

export default Shop;
