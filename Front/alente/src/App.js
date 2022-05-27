
import Cabecalho from "./Componentes/header/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Carrossel from "./Componentes/main/index";
import Rodape from "./Componentes/footer/index";
import Perfil from "./Componentes/perfil/index";
import menuOpcoes from "./Componentes/menu_opcoes/index";
import comoFunciona from "./Componentes/como_funciona/index";
import menuSaude from "./Componentes/menu_saude/index";
import Doacoes from "./Componentes/doacoes/index"
import Cadastro from "./Componentes/cadastro/index"
import faleConosco from "./Componentes/fale_conosco/index"
import sobreNos from "./Componentes/sobre_nos/index"

function App() {
  return (
    <div>
      <Cabecalho/>
      <Router>
      	<Routes>
      		<Route path="/" exact element={<Carrossel/>}/>
      		<Route path="/cadastro" element={<Cadastro/>}/>
      		<Route path="/perfil" element={<Perfil/>}/>
      		<Route path="/menu-opcoes" element={<menuOpcoes/>}/>
      		<Route path="/como-funciona" element={<comoFunciona/>}/>
      		<Route path="/menu-saude" element={<menuSaude/>}/>
      		<Route path="/fale-conosco" element={<faleConosco/>}/>
      		<Route path="/doacoes" element={<Doacoes/>}/>
      		<Route path="/sobre-nos" element={<sobreNos/>}/>
      	</Routes>
      </Router>
      <Rodape/>
    </div>
  );
}

export default App;
