import "./CSS/geralstyle.css"
import Cadastro from "./Componentes/cadastro-login/cadastro";
import Cabecalho from "./Componentes/header/index";
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Carrossel from "./Componentes/main/index";
import Rodape from "./Componentes/footer/index";
import Perfil from "./Componentes/perfil/index";
import MenuOpcoes from "./Componentes/menu_opcoes/index";
import ComoFunciona from "./Componentes/como_funciona/index";
import MenuSaude from "./Componentes/menu_saude/index";
import Doacoes from "./Componentes/doacoes/index"
import Login from "./Componentes/cadastro-login/login"
import FaleConosco from "./Componentes/fale_conosco/index"
import SobreNos from "./Componentes/sobre_nos/index";
import HistInicio from "./Componentes/sobre_nos/historia_de_inicio/index.jsx";

function App() {
  return (
    <div>
      <Router>
	<Cabecalho/>
      	<Routes>
      		<Route path="/" exact element={<Carrossel/>}/>
		<Route path="cadastro" element={<Cadastro/>}/>
      		<Route path="/login" element={<Login/>}/>
      		<Route path="/perfil" element={<Perfil/>}/>
      		<Route path="/menuopcoes" element={<MenuOpcoes/>}/>
      		<Route path="/comofunciona" element={<ComoFunciona/>}/>
      		<Route path="/menusaude" element={<MenuSaude/>}/>
      		<Route path="/faleconosco" element={<FaleConosco/>}/>
      		<Route path="/doacoes" element={<Doacoes/>}/>
      		<Route path="/sobrenos" element={<SobreNos/>}/>
		<Route path="/historiadeinicio" element={<HistInicio/>}/>
      	</Routes>
	<Rodape/>
      </Router>
    </div>
  );
}

export default App;
