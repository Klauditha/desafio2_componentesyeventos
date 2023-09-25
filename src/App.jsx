import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Registro from "./components/Registro/Registro";


const App = () => {
  
  const [alert, setAlerta] = useState({ error: "", msg: "", color: "" });

  return (
    <div className="container">

      <Registro />
    </div>
  )
}

export default App