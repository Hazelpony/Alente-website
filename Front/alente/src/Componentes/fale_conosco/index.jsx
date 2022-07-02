import {Link} from "react-router-dom";
import "./index.css";
import Modal from "./modal";

const FaleConosco = () => {
//JavaScript aqui se precisar
return(
  <>
    <main className="faleconosco">
      <section className="secaoform">
        <form className="formulario">
	  <br/>
          <h1>Fale Conosco</h1>
          <div className="form-floating">
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="floatingName" placeholder="your name" />
              <label for="floatingName">Nome</label>
            </div>
          
            <div className="form-floating mb-3">
              <input type="tel" className="form-control" id="floatingPhone" placeholder="your phone number" />
              <label for="floatingPhone">Seu telefone</label>
            </div>
            <div className="form-floating mb-3">
              <input type="email" className="form-control" id="floatingEmail" placeholder="your email" />
              <label for="floatingEmail">Seu email</label>
            </div>
            <div className="form-floating mb-3">
              <textarea className="txtarea" rows="5" placeholder="A família alente precisa de mãos! conte-nos um pouco sobre como você pode agregar à nossa comunidade"></textarea>
            </div>
            <div className="form-floating mb-3">
              <input type="checkbox" className="inputtermoseconds" />
              <label className="termoseconds"><a href="#">Aceito termos e condições</a></label>
            </div>
            <div>
              <Link to="#" className="btnenviar" type="submit" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => { return(<Modal/>) }}>Enviar</Link>
            </div>
          </div>
        </form>
      </section>
      <section className="imagem">
      </section>
    </main>
  </>
)
}

export default FaleConosco;
