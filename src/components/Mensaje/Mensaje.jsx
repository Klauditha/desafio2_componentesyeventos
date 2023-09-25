import "./Mensaje.css"

const Mensaje = (props) => {
    return (
        <div className='error p-2 m-2 rounded-3'>{props.mensaje}</div>
    )
}
export default Mensaje
