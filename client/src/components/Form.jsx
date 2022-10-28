import { useState } from "react"; 
import axios from 'axios'
import{ Link } from "react-router-dom"
import { BASE_URL } from "../globals";
import { useEffect } from "react";



const Form = (props) => {
  const restaurantInitialState = {
    _id: '',
    submitted: false
  }

  const[restaurant, setRestaurant] = useState(restaurantInitialState)

  const initialValues = {
    name: '',
    address: '',
    phone: '',
    broken: '',
    working: '',
    update: '',
  }

  const [formValues, setFormValues] = useState(initialValues)

  const handleChange = (evt) => {
    const { id, value, restaurants } = evt.target
    setFormValues({...formValues,[id]: value, restaurants})
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    const postRestaurant = async (input) =>{
      try{
        await axios.post(`${BASE_URL}/neighborhoods`, input)
      } catch (error) {
        console.log(error)
      }
    }
    postRestaurant(formValues)
    setFormValues(initialValues)
  }








  // const [restaurant, setRestaurant] = useState([])
  // const initialState = {
  //   name: '',
  //   address: '',
  //   phone: '',
  //   broken: '',
  //   working: '',
  //   update: '',
  // }
  // const [formState, setFormState] = useState(initialState)
  // const [formValue, setFormValues] = useState(initalValues)


  // useEffect(() => {
  //   const getRestaurant = async () => {
  //     try{
  //       let res = await axios.get(`${BASE_URL}/restaurant/:id`)
  //       console.log('form', res.data)
  //       setRestaurants(res.data)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   getRestaurant()
  // })

  // const handleSubmit = (evt) => {
  //   evt.preventDefault()
  //   const postRestaurant = async (input) =>{
  //     try{
  //       axios.post(`${BASE_URL}/restaurants`, input)
  //       let get = await axios.get(`${BASE_URL}/restaurants/`)
  //       const newRestaurant = {
  //         _id: get.data.restaurants[get.data.restaurants].id,
  //         submitted: true
  //       }
  //       setRestaurant(newRestaurant)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   postRestaurant()
  //   setFormState(initialState)
  // }

  // const handleChange = (evt) => {
  //   setFormState({...formState, [evt.target.id]: evt.target.value})
  // }

  return(
    <div>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Submit Restaurant</label>
        <br></br>
        {/* <label htmlFor="neighborhoods">Neighborhoods:</label>
        <input
          id="neighborhoods"
          onChange={handleChange}
          value={formValues.name}
          placeholder= 'Old Victoria'
        /> */}
        <br></br>
        <label htmlFor="restaurant">Neighborhood:</label>
        <input
          id="name"
          onChange={handleChange}
          value={formValues.name}
          placeholder= 'Old Victoria'          
        />
        <br></br>
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          onChange={handleChange}
          value={formValues.address}
        />
        <br></br>
        <label htmlFor="phone">Phone:</label>
        <input
          type="number"
          id="phone"
          onChange={handleChange}
          value={formValues.phone}
        />
        <br></br>
        <label htmlFor="working">Ice cream machine working:</label>
        <input
          id="working"
          onChange={handleChange}
          value={formValues.working}
          placeholder='false'
        />
        <br></br>
        <button type="submit" onSubmit={props.onSubmit}>Send</button>
      </form>
    </div>
  )
}

export default Form