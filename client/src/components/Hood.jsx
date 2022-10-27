import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

const Hood = () => {

  const { id } = useParams()

  const [neighborhood, setNeighborhood] = useState(null)

  useEffect(() => {
    
    const showNeighborhood = async () =>{
      try{
        const res = await axios.get(`${BASE_URL}/neighborhoods/${id}`)
        setNeighborhood(res.data.neighborhood)
      }catch(error){
        console.log(error)
      }
    }
    showNeighborhood()
}, [])


  return (
    <div className='hoodContainer'>
      <h1>{neighborhood?.name}</h1>
      <div className='hoodGrid'>
        {neighborhood?.restaurants.map((restaurant) => (
          <Link to={`/restaurants/${restaurant._id}`} key={restaurant._id}>
            {restaurant.name} 
            <div className="restContainer">
              <div className="restInfo">
                <h4>{restaurant.address}</h4>
                <h4>{restaurant.phone}</h4>
              </div>
            <h3>Ice Cream Machine Working: {restaurant.broken}</h3>
            </div>
          </Link>
          //rest of restaurant info edit and delete button
        
        ))}
      </div>
    </div>
  )
}

export default Hood