import { Routes,Route } from 'react-router-dom'
import './App.css'
import Navbar from './assets/components/navbar/navbar'
import Home from './assets/components/home/home'
import Industries from './assets/components/industries-connected/industries'
import About from './assets/components/about/about'
import Portfolio from './assets/components/portfolio/portfolio'
import End from './assets/components/end/end'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/industries' element={<Industries/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
      </Routes>
      <End/>
    </>
  )
}

export default App