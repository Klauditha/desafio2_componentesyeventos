/* eslint-disable react/prop-types */

import SocialButton from "../SocialButton/SocialButton";
import Formulario from "../Formulario/Formulario";
import Alert from "../Alert/Alert";
import "./Registro.css";
import Container from "react-bootstrap/Container";
import Texto from "../Texto/Texto";


const Registro = (props) => {
  return (
    <>
      <Container className="pt-5 pl-2 pr-2 mb-5 pb-5 bg-light text-center rounded-5">
        <h1>Crea una cuenta</h1>
        <div className="pb-0" id="seccionIconos">
          <SocialButton icono="fa-brands fa-facebook" />
          <SocialButton icono="fa-brands fa-github" />
          <SocialButton icono="fa-brands fa-linkedin-in" />
        </div>
        <Texto />
        <Formulario setAlerta={props.setAlerta} alerta={props.alerta} />
        {props.alerta.msg ? <Alert className="rounded-3" variant={props.alerta.color} mensaje={props.alerta.msg} /> : null}
      </Container>
    </>
  );
};

export default Registro;
