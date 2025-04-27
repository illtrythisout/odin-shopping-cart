import { Link } from 'react-router-dom';
import './errorPage.module.css';

export default function ErrorPage() {
  return (
    <div className="errorPage">
      <h1>404</h1>
      <p>Oops, it looks like the page you are looking for does not exist</p>
      <Link to="/">Go back home</Link>
    </div>
  );
}
