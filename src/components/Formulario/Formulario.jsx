
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ComponenteError from '../ComponenteError/ComponenteError';

function Formulario() {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [vacio, setVacio] = useState(false);
    const [igual, setIgual] = useState(false);
    const [password, setPassword] = useState("");
    const [pass, setPass] = useState("");

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
                {vacio ? <ComponenteError /> : ""}

            </Form>
        </>
    )
}

export default Formulario