import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeLogin from "./Pages/HomeLogin";
import ResetSenha from "./Pages/ResetSenha";
import CadastroUsuario from "./Pages/CadastroUsuario";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLogin />} />
        <Route path="/resetSenha" element={<ResetSenha />} />
        <Route path="/novoUsuario" element={<CadastroUsuario></CadastroUsuario>} />
      </Routes>
    </Router>
  );
}

export default App;
