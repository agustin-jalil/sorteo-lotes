import './Header.css';

function Header() {
  return (
    <header className="header-navbar">
      <nav className="nav-container">
        <div className="div-tags">
          <a href="http://127.0.0.1:5173/" aria-label="Catamarca Capital" className="div-a-tag">
            <img src="iso.svg" className="div-img-tag" alt="Catamarca Capital" />
          </a>
        </div>
        <div className="div-tags">
          <a href="http://127.0.0.1:5173/" aria-label="Catamarca Capital" className="div-a-tag">
            <img src="logo-giro.svg" className="div-img-tag" alt="Catamarca Capital" />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
