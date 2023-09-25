import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Formulario = (props) => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [pass, setPass] = useState("");

    //Estado para error de input vacio
    const [vacio, setVacio] = useState(false);

    //Estado para error de password diferentes
    const [igual, setIgual] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        if (nombre === "" || email === "" || password === "" || pass === "") {
            setVacio(true);
        } else {
            setVacio(false)
        }

        if (password === pass) {
            setIgual(true)
        } else {
            setIgual(false)
        }
    }
    return (
        <>
            <Form className='justify-content-center align-content-center text-center ' onSubmit={handleSubmit}>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control placeholder="Nombre" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control placeholder="tuemail@ejemplo.com" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control placeholder="Contraseña" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control placeholder="Confirma tu contraseña" type="password" value={pass} onChange={(e) => setPass(e.target.value)} />
                </Form.Group>
                <Button variant="success" type="submit">
                    Registrarse
                </Button>
                {/* {vacio ? <Mensaje /> : ""}
                {igual ? <Mensaje /> : ""} */}

            </Form>
        </>
    )
}

export default Formulario;
