import { useEffect, useState } from "react";
import App from "./App";

function useItemsData() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products", { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => {
        //console.log(response);
        setItems(response);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { items, error, loading };
}

function Preload() {
    const { items, error, loading } = useItemsData();

    return (
        <App items={items} error={error} loading={loading}/>
    )
}

export default Preload
