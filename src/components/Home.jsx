import { Link } from "react-router-dom";
import photo from "../assets/images/storephoto.jpg"
import "../index.css"
import styles from "./Home.module.css";

function Home() {

    function handleScrollUp() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <div className={styles.wrapper}>
            <img src={photo} alt="Store Photo" className={styles.photo}/>
            <div className={styles.welcomeText}>
                <p class={styles.title}><b>Shops online with fast and reliable delivery</b></p>
                <p>Made from top-tier materials, check out of our high quality products! </p>
                <Link to="/shop" className={styles.shopBtn} onClick={handleScrollUp}>Shop now</Link>
            </div>
        </div>
    )
}

export default Home;