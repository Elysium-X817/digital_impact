import { Routes,Route } from 'react-router-dom'
import './App.css'
import Navbar from './assets/components/navbar/navbar'
import Home from './assets/components/home/home'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
