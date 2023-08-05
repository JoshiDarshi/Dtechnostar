import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Header from './Components/Header'
import "./Styles/style.scss"
import "./Styles/color.scss"
import "./Styles/header.scss"
import "./Styles/home.scss"
import "./Styles/footer.scss"
import "./Styles/contact.scss"
import Home from './Components/Home'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import Services from './Components/Services'
import './Styles/mediaquery.scss'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path='/service' element={<Services/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
