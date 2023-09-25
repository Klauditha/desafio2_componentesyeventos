/* eslint-disable react/prop-types */

import SocialButton from "../SocialButton/SocialButton";
import Formulario from "../Formulario/Formulario";
import Alert from "../Alert/Alert";
import "./Registro.css";
import Container from "react-bootstrap/Container";


const Registro = (props) => {
  return (
    <>
      <Container className="pt-5 pl-2 pr-2 bg-light w-25 mb-5 pb-5 text-center">
        <h1>Crea una cuenta</h1>
        <div id="seccionIconos">
          <SocialButton icono="fa-brands fa-facebook" />
          <SocialButton icono="fa-brands fa-github" />
          <SocialButton icono="fa-brands fa-linkedin-in" />
        </div>
        <Formulario setAlerta={props.setAlerta} alerta={props.alerta} />
        {props.alerta.msg ? <Alert variant={props.alerta.color} mensaje={props.alerta.msg} /> : null}
      </Container>
    </>
  );
};

export default Registro;
