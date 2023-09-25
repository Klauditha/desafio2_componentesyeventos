import Alert from "../Alert/Alert";
import SocialButton from "../SocialButton/SocialButton";
import Formulario from "../Formulario/Formulario";
import "./Registro.css";
import Container from "react-bootstrap/Container";

const Registro = () => {
  return (
    <>
      <Container className="pt-5 pl-2 pr-2 bg-light w-25 mb-5 pb-5">
        <h1>Crea una cuenta</h1>
        <div id="seccionIconos">
          <SocialButton icono="fa-brands fa-facebook" />
          <SocialButton icono="fa-brands fa-github" />
          <SocialButton icono="fa-brands fa-linkedin-in" />
        </div>
        <Alert variant="danger" mensaje="Error" />
        <Alert variant="success" mensaje="Exito" />
        <Formulario />
      </Container>
    </>
  );
};

export default Registro;
