import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from "./components/Formulario/Formulario"
import Registro from "./components/Registro/Registro";


const App = () => {
  return (
    <div className="container">
      <Registro />
      <Formulario />
    </div>
  )
}

export default App