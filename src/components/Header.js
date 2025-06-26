import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="header-container">
        <img src="/images/logo.png" alt="Little Lemon logo" className="logo" />
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/booking">Book Table</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
