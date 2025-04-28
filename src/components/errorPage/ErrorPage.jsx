import { Link } from 'react-router-dom';
import styles from './errorPage.module.css';

export default function ErrorPage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.text}>
        Oops, it looks like the page you are looking for does not exist
      </p>
      <button className={styles.button}>
        <Link to="/" className="link">
          Go back home
        </Link>
      </button>
    </div>
  );
}
