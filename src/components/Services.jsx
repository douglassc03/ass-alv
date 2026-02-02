import metaImg from "../assets/meta-ads.png";
import googleImg from "../assets/google-ads.png";

export default function Services() {
  return (
    <section id="servicos" className="section">
      <div className="container">
        <div className="section__title">
          <h2>O que fazemos</h2>
          <p>
            Gerenciamos campanhas que convertem em{" "}
            <strong>Meta Ads</strong> e <strong>Google Ads</strong>.
          </p>
        </div>

        <div className="grid grid--2">
          <article className="card">
            <div className="card__head">
              <div className="card__icon meta">∞</div>
              <h3>Meta Ads</h3>
            </div>

            <ul className="checklist">
              <li>Segmentação de público qualificada</li>
              <li>Anúncios no Instagram e Facebook</li>
              <li>Estratégias focadas em conversão</li>
            </ul>

            <div className="card__media">
              <img src={metaImg} alt="Campanhas Meta Ads" />
            </div>
          </article>

          <article className="card">
            <div className="card__head">
              <div className="card__icon google">G</div>
              <h3>Google Ads</h3>
            </div>

            <ul className="checklist">
              <li>Pesquisa de palavras-chave rentáveis</li>
              <li>Anúncios no Google e YouTube</li>
              <li>Otimização e análise de performance</li>
            </ul>

            <div className="card__media">
              <img src={googleImg} alt="Campanhas Google Ads" />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
