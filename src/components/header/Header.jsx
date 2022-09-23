import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <h1>Bookstore CMS</h1>
        <ul>
          <li>
            <Link to="/books">Books</Link>
          </li>
          <li>
            <Link to="/category">Categories</Link>
          </li>
        </ul>
      </nav>
      <span>
        <FaUser />
      </span>
    </header>
  );
}

export default Header;
