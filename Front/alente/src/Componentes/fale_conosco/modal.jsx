import {Link} from "react-router-dom";
import "./index.css";
import FaleConosco from "./index";
import confete from "../../Imagens/confete.png";
import {Modal, Button} from "react-bootstrap";

const ModalContato = (props) => {
  return(
	<>
	    <Modal show={props.show} onHide={props.handleClose}>
  	      <Modal.Header>
		<Modal.Title className="txtcenter"><img src={confete}/>Obrigado por nos contatar!</Modal.Title>
	      </Modal.Header>
	      <Modal.Body className="fundomodalbody txtcenter">
		<p>Em breve retornaremos seu contato!</p>
	      </Modal.Body>
	      <Modal.Footer>
		<Button style={{backgroundColor: "#AD6E6F"}} variant="secondary" onClick={props.handleClose}>
		  Fechar
		</Button>
	      </Modal.Footer>
	    </Modal>
	</>
  )
}

export default ModalContato;
