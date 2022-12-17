import Banner from "./componentes/Banner/Banner";
import CampoTexto from "./componentes/CampoTexto";

function App() {
  return (
    <div className="App">
      <Banner />
      <CampoTexto label="Nome" placeholder="Digite o seu nome"></CampoTexto>
      <CampoTexto label="Cargo" placeholder="Digite o seu cargo"></CampoTexto>
      <CampoTexto label="Imagem" placeholder="Digite o seu enderco da imagem"></CampoTexto>
    </div>
  );
}

export default App;
