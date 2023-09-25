import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Formulario = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    //caso error provisorio
    props.setAlerta({
      error: true,
      msg: "Completa informacion de tarea !",
      color: "danger",
    });
    //console.log(props.alerta);
    //caso correcto
    //setAlerta({ error: false, msg: "OK", color: "success" });
    return;
  };
  return (
    <>
      <Form
        onSubmit={handleSubmit}
        className="justify-content-center align-content-center text-center mb-5"
      >
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control type="text" placeholder="Nombre" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="tuemail@ejemplo.com" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Contraseña" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Confirma tu contraseña" />
        </Form.Group>

        <Button variant="success" type="submit">
          Registrarse
        </Button>
      </Form>
    </>
  );
};

export default Formulario;
