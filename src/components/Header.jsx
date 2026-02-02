const WHATS_LINK =
  "https://wa.me/55SEUNUMEROAQUI?text=Oi!%20Quero%20anunciar%20e%20vender%20mais.";

export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <div className="brand">
          <div className="brand__logo" aria-hidden="true">A</div>
          <div className="brand__text">
            <strong>Agência ASS - Tráfego Pago</strong>
          </div>
        </div>

        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#servicos">Serviços</a>
          <a href="#depoimentos">Depoimentos</a>
          <a href="#contato">Contato</a>
        </nav>

        <a className="btn btn--whats" href={WHATS_LINK} target="_blank" rel="noreferrer">
          Falar no WhatsApp
        </a>
      </div>
    </header>
  );
}
