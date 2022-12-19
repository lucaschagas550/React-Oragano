import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = (props) => {

  const times = [
    'Programacao',
    'Front-end',
    'Data Science',
    'Devops',
    'UX e Desing',
    'Mobile',
    'Inovacao e Gestao'
  ]

  return (
    <section className="formulario">
      <form>
        <h2> {props.h2}</h2>
        <CampoTexto label="Nome" placeholder="Digite o seu nome"></CampoTexto>
        <CampoTexto label="Cargo" placeholder="Digite o seu cargo"></CampoTexto>
        <CampoTexto label="Imagem" placeholder="Digite o seu enderco da imagem"></CampoTexto>
        <ListaSuspensa label="Time" itens={times}></ListaSuspensa>
      </form>
    </section>
  );
};

export default Formulario;
