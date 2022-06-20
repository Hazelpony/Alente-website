import "./index.css";
import {Link} from "react-router-dom";

const ComoFunciona = () => {
  //JavaScript aqui se precisar
  return(
    <>
      <main>
        <section className="sobre">
          <article>
            <h1>1</h1>
            <p>No campo "conte conosco" você preenche seus dados já agendando melhor dia e hora para um encontro de boas vindas com nosso ACOLHEDOR-ALENTE. O ACOLHEDOR é um integrante da nossa família que vai te recepcionar, escutar e orientar, pois assim poderemos atender com maior rapidez sua necessidade.</p>
          </article>
          <article>
            <h1>2</h1>
            <p>Por e-mail você receberá a confirmação do contato com o link da vídeo chamada no dia e hora escolhido. Neste encontro você será direcionada de acordo com sua necessidade, mas lembro que temos nos programas de educação e bem-estar oficinas dinâmicas e bem legais para todos os grupos dentro da comunidade.</p>
          </article>
          <article>
            <h1>3</h1>
            <p>Na comunidade você terá as informações de todas as vagas de atendimentos, grupos e oficinas, assim como poderá interagir com os integrantes da comunidade. Não é legal? Ah! O seu ACOLHEDOR-ALENTE estará sempre te ajudando como um anjinho da guarda seu. Sabia que quando estiver preparada poderá ser um MEMBRO-GUIA levando sua experiência para outros membros ? Estamos te esperando. Vem!</p>
          </article>
        </section>
        <section className="sectbtn">
          <Link to="#" className="btn-brown">Conheça nossos programas</Link>
        </section>
      </main>
    </>
  )
}

export default ComoFunciona;
