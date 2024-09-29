import { Link, useParams } from "react-router-dom"
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";

function App() {
  const {name} = useParams();

  return (
    <>
    <nav>
      <Link to="/">HOME</Link>
      <Link to="/shop">SHOP</Link>
      <Link to="/cart">CART</Link>
    </nav>
    <div>
      {name === "shop"? (
        <Shop/>
      ) : name === "cart"? (
        <Cart/>
      ) : (
        <Home/>
      )}
    </div>
    </>
  )
}

export default App
