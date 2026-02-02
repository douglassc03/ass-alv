import phoneImg from "../assets/whatsapp-phone.png";

const WHATS_LINK =
  "";

export default function CtaWhats() {
  return (
    <section id="contato" className="cta">
      <div className="container cta__inner">
        <div className="cta__content">
          <h2>Quer vender mais?</h2>
          <p>
            Fale com a nossa equipe agora mesmo e descubra como podemos{" "}
            <strong>potencializar</strong> seus resultados.
          </p>

          <a className="btn btn--primary" href={WHATS_LINK} target="_blank" rel="noreferrer">
            Falar no WhatsApp
          </a>

          <small className="cta__note">
            Retornamos em até 1 hora durante o horário comercial.
          </small>
        </div>

        <div className="cta__image">
          <img src={phoneImg} alt="Celular com conversa no WhatsApp" />
        </div>
      </div>
    </section>
  );
}
