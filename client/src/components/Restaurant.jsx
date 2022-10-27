// import { useState, useEffect } from "react"
// import { useParams } from 'react-router-dom'
// import axios from 'axios'
//edit page  -- form 
const Restaurant = (props) => {
  return(
    <div className="restContainer">
      <div className="restInfo">
        <h2>{props.name}</h2>
        <h3>{props.address}</h3>
        <h3>{props.phone}</h3>
      </div>
      <h3>{props.broken}</h3>
      <h3>{props.working}</h3>
    </div>
  )
}


export default Restaurant

// const Restaurant = ({name, address, phone, broken, working, update, id})  => {

//   let { neighborhoodsId } = useParams

//   const [restaurant, setRestaurant] = useState([])

//   useEffect(() => {
//     const singleRestaurant = async () => {
//       const res = await axios.get(`/api/restaurants/${id}`)
//       console.log('single rest', res.data)
//       setRestaurant(res.data)
//     }
//     singleRestaurant()
//   }, [])



//   return (
//     <div className='RestContainer'>

//       <div className='Restinfo'>
//         hello

//         <h2>{restaurant.name}</h2>
//         <h3>{address}</h3>
//         <h4>{phone}</h4>
//         <h2>{broken}</h2>
//         <h2>{working}</h2>
//         <h2>{update}</h2>
//       </div>
//     </div>
//   )
// }