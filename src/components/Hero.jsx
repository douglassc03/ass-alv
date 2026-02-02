import heroImg from "../assets/hero-illustration.png";

const WHATS_LINK =
  "https://wa.me/55SEUNUMEROAQUI?text=Oi!%20Quero%20anunciar%20e%20vender%20mais.";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__bg" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__content">
          <h1>Tráfego Pago que Gera Resultados</h1>
          <p>
            Aumente suas vendas com anúncios estratégicos e otimização focada em performance.
          </p>

          <div className="hero__actions">
            <a className="btn btn--primary" href={WHATS_LINK} target="_blank" rel="noreferrer">
              Falar no WhatsApp
            </a>
            <a className="btn btn--ghost" href="#servicos">
              Ver serviços
            </a>
          </div>

          <div className="hero__badges">
            <span className="badge">Meta Ads</span>
            <span className="badge">Google Ads</span>
            <span className="badge">Otimização</span>
          </div>
        </div>

        <div className="hero__image">
          <img src={heroImg} alt="Painel ilustrativo com gráficos e campanhas" />
        </div>
      </div>
    </section>
  );
}
