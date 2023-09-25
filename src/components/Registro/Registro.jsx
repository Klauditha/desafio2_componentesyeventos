import Alert from "../Alert/Alert";
import SocialButton from "../SocialButton/SocialButton";
import "./Registro.css";
import Container from "react-bootstrap/Container";

const Registro = () => {
  return (
    <>
      <Container>
        <div id="seccionIconos">
          <SocialButton icono="fa-brands fa-facebook" />
          <SocialButton icono="fa-brands fa-github" />
          <SocialButton icono="fa-brands fa-linkedin-in" />
        </div>
        <Alert variant="danger" mensaje="Error" />
        <Alert variant="success" mensaje="Exito" />
      </Container>
    </>
  );
};

export default Registro;
