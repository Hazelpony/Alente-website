import {Link} from "react-router-dom";
import FaleConosco from "./index";
import {Modal, Button} from "react-bootstrap";

const ModalContato = (props) => {
  return(
	<>
	    <Modal show={props.show} onHide={props.handleClose}>
  	      <Modal.Header closeButton>
		<Modal.Title>Obrigado por nos contatar!</Modal.Title>
	      </Modal.Header>
	      <Modal.Body>
		<p>Em breve retornaremos seu contato!</p>
	      </Modal.Body>
	      <Modal.Footer>
		<Button variant="secondary" onClick={props.handleClose}>
		  Fechar
		</Button>
	      </Modal.Footer>
	    </Modal>
	</>
  )
}

export default ModalContato;
