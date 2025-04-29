import './shop.module.css';
import styles from './shop.module.css';

let items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function Shop() {
  return (
    <div className={styles.shop}>
      <h1>Browse the following items</h1>
      <div className={styles.items}>
        {items.map((item) => {
          return <p>{item}</p>;
        })}
      </div>
    </div>
  );
}
