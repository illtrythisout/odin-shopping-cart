import { useContext } from 'react';
import { CartContext } from '../app/App';
import styles from './cart.module.css';

export default function Cart() {
  const { itemsInCart } = useContext(CartContext);
  console.log('cart', itemsInCart);
  return (
    <div className={styles.shop}>
      <h1>This is your shopping cart</h1>
      <div className={styles.cart}>
        {itemsInCart.map((item) => {
          return <p>{item.count}</p>;
        })}
      </div>
    </div>
  );
}
