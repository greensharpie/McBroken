import { useState, useEffect } from "react" 
import axios from 'axios'
import { Link } from 'react-router-dom'
import Restaurant from "./Restaurant"


const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([])

  useEffect(()=> {
    const allRestaurants = async () => {
      const res = await axios.get(`/api/restaurants`)
      setRestaurants(res.data)
    }
    allRestaurants()
  },[])
  return(
    <div className="restaurantsContainer">
    <h2>Restaurants</h2>
    <div className="restaurantsGrid">
      {restaurants?.map((restaurants) => (
        <Link to = {`/restaurants/${restaurants._id}`} key={restaurants._id}>
        <Restaurant name={restaurants.name} 
        address={restaurants.address}
        phone={restaurants.phone}
        broken={restaurants.broken}
        working={restaurants.working}
        update={restaurants.update}
        />
        </Link>
      ))}
    </div>
    </div>
  )
}

export default Restaurants