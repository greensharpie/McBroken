import { useState, useEffect } from "react" 
import axios from 'axios'

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([])

  useEffect(()=> {
    const allRestaurants = async () => {
      const res = await axios.get(`/api/restaurants`)
      setRestaurants(res.data.restaurants)
    }
    allRestaurants()
  },[])
  return(
    <div className="restaurantsContainer">
    <h2>HELLO</h2>
    </div>
  )
}

export default Restaurants