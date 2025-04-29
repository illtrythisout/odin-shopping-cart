import styles from './shopItem.module.css';

export default function ShopItem(item) {
  item = item.item;
  return (
    <div className={styles.item}>
      <img src={item.image} alt="" className={styles.image} />
      <span className={styles.title}>{item.title}</span>
      <span className={styles.price}>{item.price}€</span>
      <div className={styles.purchaseActions}>
        <input
          type="number"
          defaultValue="1"
          step="1"
          min="0"
          className={styles.amount}
        />
        <button>Add to cart</button>
      </div>
    </div>
  );
}
