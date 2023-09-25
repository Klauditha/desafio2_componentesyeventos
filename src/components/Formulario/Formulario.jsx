import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Formulario = (props) => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [Pass, setPass] = useState("");

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
                className="justify-content-center align-content-center text-center mb-5"
                onSubmit={handleSubmit}
            >
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control
                        placeholder="Nombre"
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                        placeholder="tuemail@ejemplo.com"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                        placeholder="Contraseña"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                        placeholder="Confirma tu contraseña"
                        type="password"
                        value={Pass}
                        onChange={(e) => setPass(e.target.value)}
                    />
                </Form.Group>

                <Button variant="success" type="submit">
                    Registrarse
                </Button>
            </Form>
        </>
    );
};

export default Formulario;
