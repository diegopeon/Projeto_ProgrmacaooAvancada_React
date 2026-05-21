import './Hero.css';

function Hero({ onPrimaryAction }) {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="container hero__layout">
        <div className="hero__content">
          <p className="eyebrow">Showroom digital premium</p>
          <h1 id="hero-title">Engenharia rara. Luxo em movimento.</h1>
          <p className="hero__text">
            Uma curadoria exclusiva de veículos de alta performance para quem entende que potência também é uma forma de arte.
          </p>

          <div className="hero__actions">
            <button className="button button--primary" onClick={onPrimaryAction}>
              Solicitar curadoria
            </button>
            <a className="button button--secondary" href="#catalogo">
              Explorar catálogo
            </a>
          </div>
        </div>

        <aside className="hero__card" aria-label="Resumo de experiência premium">
          <span>Curadoria privada</span>
          <strong>Alta performance com análise documental e atendimento sob agendamento.</strong>
          <small>Superesportivos · SUVs premium · Sedãs executivos · Colecionáveis</small>
        </aside>
      </div>
    </section>
  );
}

export default Hero;
