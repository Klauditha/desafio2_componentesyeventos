/* eslint-disable react/prop-types */
import Alerta from "react-bootstrap/Alert";
const Alert = (props) => {
  return (
    <Alerta  key={props.variant} variant={props.variant}>
      {props.mensaje}
    </Alerta>
  );
};

export default Alert;
