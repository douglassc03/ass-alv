export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© {new Date().getFullYear()} Agência ASS. Todos os direitos reservados.</p>
        <div className="footer__links">
          <a href="#home">Topo</a>
          <a href="#servicos">Serviços</a>
          <a href="#contato">Contato</a>
        </div>
      </div>
    </footer>
  );
}
