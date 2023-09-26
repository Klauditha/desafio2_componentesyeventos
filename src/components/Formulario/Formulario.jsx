import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Formulario = (props) => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [pass, setPass] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nombre === "" || email === "" || password === "" || pass === "") {
            props.setAlerta({
                error: true,
                msg: "Completa todos los campos !",
                color: "danger",
            });
        } else if (password != pass) {
            props.setAlerta({
                error: true,
                msg: "Claves distintas",
                color: "danger",
            });
        } else {
            props.setAlerta({
                error: true,
                msg: "Registro correcto",
                color: "success",
            });
            setNombre("");
            setEmail("");
            setPassword("");
            setPass("");
        }
    }
    return (
        <>
            <Form className='justify-content-center align-content-center text-center ' onSubmit={handleSubmit}>

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
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                    />
                </Form.Group>
                <Button className="w-100" variant="success" type="submit">
                    Registrarse
                </Button>
            </Form>
        </>
    );
};

export default Formulario
