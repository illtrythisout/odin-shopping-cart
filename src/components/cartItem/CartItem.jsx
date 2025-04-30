import styles from './cartItem.module.css';

export default function CartItem({ item, count }) {
  return (
    <div className={styles.item}>
      <img src={item.image} alt="" className={styles.image} />
      <span className={styles.title}>{item.title}</span>
      <span className={styles.price}>{`Total: ${item.price * count}€`}</span>
      <span className={styles.quantity}>{`quantity: ${count}`}</span>
    </div>
  );
}
