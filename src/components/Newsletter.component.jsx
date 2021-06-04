import './Newsletter.style.css';

export default function Newsletter() {
  return (
    <section className="slide5">
      <div className="container">
        <div className="row">
          <div className="title-newsletter">
            <h3>Receba novidades da nossa área de produtos digitais.</h3>
          </div>
          <form>
            <input type="text" placeholder="Digite seu e-mail" required></input>
            <button type="submit">cadastrar</button>
          </form>
        </div>
      </div>
    </section>
  );
}
