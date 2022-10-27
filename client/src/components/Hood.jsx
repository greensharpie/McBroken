import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Restaurant from './Restaurant'
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
          </Link>
          //rest of restaurant info edit and delete button
        ))
        }
      </div>
    </div>
  )
}

export default Hood











// const Hood = ({name})  => {
//   const {id} = useParams()
//   const [restaurants, setRestaurant] = useState([])

//   useEffect(() => {
//     const singlRestaurant= async () =>{
//       const res = await axios.get(`/api/restaurants/${id}`)
//       console.log('something', res.data)
//       setRestaurant(res.data)
//     }
//     singlRestaurant()
//   }, [])
//   return (
    
//     <div className='hoodContainer'>
//       {restaurants?.map((restaurants)=>(
//         <Link to={`/restaurants/${restaurants._id}`} key={restaurants._id}>
//         <Restaurant />
//         </Link>
//       ))}
//       <div className='hoodinfo'>
//         <h2>{name}</h2>
        
//       </div>
//     </div>
//   )
// }
