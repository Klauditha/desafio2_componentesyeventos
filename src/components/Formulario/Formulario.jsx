
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Formulario() {
    return (
        <>
            <Form className='justify-content-center align-content-center text-center m-lg-5 w-25'>

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
    )
}

export default Formulario