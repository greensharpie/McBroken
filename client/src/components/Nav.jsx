import { Link }  from 'react-router-dom'
import React from 'react'

const Nav = () => {
  return(
    <nav className='navBar'>
      <h4>McBroken</h4>
      <div>
        <Link to = '/'>Home</Link>
        <Link to = '/neighborhoods'>Neighborhoods</Link>
        <Link to = '/restaurants'>Restaurants</Link>
      </div>
    </nav>
  )
}

export default Nav