import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="header__nav container" aria-label="Navegação principal">
        <a className="header__brand" href="#top" aria-label="Aurum Motors - início">
          <span className="header__mark">A</span>
          <span>Aurum Motors</span>
        </a>

        <div className="header__links" role="list">
          <a href="#catalogo">Catálogo</a>
          <a href="#experiencia">Experiência</a>
          <a href="#faq">FAQ</a>
        </div>

        <a className="button button--ghost header__cta" href="#catalogo">
          Ver coleção
        </a>
      </nav>
    </header>
  );
}

export default Header;
