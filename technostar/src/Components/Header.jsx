import React from 'react'
import { Link } from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'
function Header() {
  return (
    <nav>
     <h1>DTechStar.</h1>
     <main>
        <HashLink to={"/#home"}>Home</HashLink>
        <HashLink to={"/#about"}>About</HashLink>
        <Link to={"/contact"}>Contact</Link>
        <HashLink to={"/#brands"}>Brands</HashLink>
        <Link to={"/service"}>Services</Link>
     </main>
    </nav>

  )
}

export default Header