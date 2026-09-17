import { Routes,Route } from 'react-router-dom'
import './App.css'
import Navbar from './assets/components/navbar/navbar'
import Home from './assets/components/home/home'
import Industries from './assets/components/industries-connected/industries'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/industries' element={<Industries/>}/>
      </Routes>
    </>
  )
}

export default App