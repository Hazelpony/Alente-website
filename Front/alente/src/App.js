
import Cabecalho from "./Componentes/header/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Carrossel from "./Componentes/main/index";
import Rodape from "./Componentes/footer/index";
import Perfil from "./Componentes/perfil/index";
import MenuOpcoes from "./Componentes/menu_opcoes/index";
import ComoFunciona from "./Componentes/como_funciona/index";
import MenuSaude from "./Componentes/menu_saude/index";
import Doacoes from "./Componentes/doacoes/index"
import Cadastro from "./Componentes/cadastro/index"
import FaleConosco from "./Componentes/fale_conosco/index"
import SobreNos from "./Componentes/sobre_nos/index"

function App() {
  return (
    <div>
      <Router>
        <Cabecalho/>
      	<Routes>
      		<Route path="/" exact element={<Carrossel/>}/>
      		<Route path="/cadastro" element={<Cadastro/>}/>
      		<Route path="/perfil" element={<Perfil/>}/>
      		<Route path="/menu-opcoes" element={<MenuOpcoes/>}/>
      		<Route path="/como-funciona" element={<ComoFunciona/>}/>
      		<Route path="/menu-saude" element={<MenuSaude/>}/>
      		<Route path="/fale-conosco" element={<FaleConosco/>}/>
      		<Route path="/doacoes" element={<Doacoes/>}/>
      		<Route path="/sobre-nos" element={<SobreNos/>}/>
      	</Routes>
      	<Rodape/>
      </Router>
    </div>
  );
}

export default App;
