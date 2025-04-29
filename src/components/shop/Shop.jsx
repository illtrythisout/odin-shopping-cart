import { useState, useEffect } from 'react';
import styles from './shop.module.css';
import ShopItem from '../shopItem/ShopItem';

function useItems() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => {
        if (response.status >= 400) {
          throw new Error('server error');
        }
        return response.json();
      })
      .then((response) => setItems(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { items, error, loading };
}

export default function Shop() {
  const { items, error, loading } = useItems();

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>A network error was encountered</h1>;

  return (
    <div className={styles.shop}>
      <h1>Browse the following items</h1>
      <div className={styles.items}>
        {items.map((item) => {
          // console.log(item);
          return <ShopItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}
