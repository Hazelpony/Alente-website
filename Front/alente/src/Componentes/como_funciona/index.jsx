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
            <p>lorem ipsun</p>
          </article>
          <article>
            <h1>2</h1>
            <p>lorem ipsun</p>
          </article>
          <article>
            <h1>3</h1>
            <p>lorem ipsun</p>
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
