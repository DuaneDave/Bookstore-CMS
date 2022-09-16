import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <h1>Bookstore CMS</h1>
      <nav>
        <ul>
          <li>
            <Link to="/books">Books</Link>
          </li>
          <li>
            <Link to="/form">Categories</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
