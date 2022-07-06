import {Link} from "react-router-dom";
import "./index.css";
import ModalContato from "./modal";
import {useState} from "react"

const FaleConosco = (props) => {
  
  const [show, setShow] = useState(false);
  
  const handleClose = () => {setShow(false)};

  const handleShow = () => {setShow(true)};

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
                <input type="button" value="Enviar" className="btnenviar" onClick={() => handleShow()} />
              </div>
            </div>
          </form>
	{show ? (<ModalContato show={true} handleClose={handleClose}/>) : ("")}/>
      </section>
        <section className="imagem">
      </section>
    </main>
  </>
)
}

export default FaleConosco;
