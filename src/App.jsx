import './App.css'
import { Contenido } from './Components/Contenido'
import { ImgPrincipal } from './Components/ImgPrincipal'
import { Menu } from './Components/Menu'

function App() {

  return (
    <div className="w-100">
      
      <Menu/>
      <ImgPrincipal/>
      <Contenido/>
    </div>
  )
}

export default App
