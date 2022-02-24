import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='c-navbar'>

      <div className='c-navbar__logo'>
        <img src="#" alt="" />
        <span>Poke-finder</span>
      </div>

      <nav className='c-navbar__nav'>
          <Link to={'/pokedex'}>
              Home
          </Link>
          <Link to={'pokedex/test'}>
              Test2
          </Link>
      </nav>
        
    </div>
  )
}

export default NavBar
