import { Link }  from 'react-router-dom'
import Form from './Form'

const Nav = () => {
  return(
    <nav className='navBar'>
      <h4>McBroken</h4>
      <div className='navLinks'>
        <Link to = {'/'}>Home</Link>
        <Link to = {'/neighborhoods'}>Neighborhoods</Link>
        {/* <Link to = {'/restaurants'}>Restaurants</Link> */}
        {/* <Link to = {'/forms'}>Form</Link> */}
      </div>
    </nav>
  )
}

export default Nav