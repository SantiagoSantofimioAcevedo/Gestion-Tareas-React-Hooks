import FiltroTareas from "./components/FiltroTareas"
import FormularioTareas from "./components/FormularioTareas"
import ListadoTareas from "./components/ListadoTareas"


function App() {


  return (
    <>
      <div className="bg-blue-800 mx-20 rounded p-8 max-w-2x1 text-2x1 font-bold mb-6 text-center "> 
        <h1 className="text-white">¡Dale orden a tu dia aqui!</h1>
      </div>
      <div className="bg-blue-600 mx-20 p-8 max-w-2x1 rounded"> 
        <FormularioTareas />
        <FiltroTareas />
        <ListadoTareas />

      </div>
  
        
    </>
  ) 
}

export default App
