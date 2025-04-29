import styles from './shopItem.module.css';

export default function ShopItem({ item, addItemToCart }) {
  function handleAddToCart() {
    const count =
      parseInt(document.getElementById(`item${item.id}`).value) || 1;
    addItemToCart(item, count);
  }

  return (
    <div className={styles.item}>
      <img src={item.image} alt="" className={styles.image} />
      <span className={styles.title}>{item.title}</span>
      <span className={styles.price}>{item.price}€</span>
      <div className={styles.purchaseActions}>
        <input
          id={`item${item.id}`}
          type="number"
          defaultValue="1"
          step="1"
          min="0"
          className={styles.amount}
        />
        <button onClick={handleAddToCart}>Add to cart</button>
      </div>
    </div>
  );
}
