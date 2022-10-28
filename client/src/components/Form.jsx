import { useState } from "react"; 
import axios from 'axios'
import{ Link } from "react-router-dom"
import { BASE_URL } from "../globals";
import { useEffect } from "react";
import Hood from "./Hood";
import Restaurants from "./Restaurants";
import e from "cors";

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
    const { id, value } = evt.target
    setFormValues({...formValues,[id]: value})
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    const postRestaurant = async (input) =>{
      try{
        await axios.post(`${BASE_URL}/neighborhoods`, input)
        let get = await axios.get(`${BASE_URL}/neighborhoods/`)
        const newRestaurant = {
          _id: get.data.restaurants[get.data.restaurants.length-1]._id,
          submitted: true
        }
        setRestaurant(newRestaurant)
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
        <label htmlFor="neighborhoods">Neighborhoods:</label>
        <select
          id="neighborhoods"
          onChange={handleChange}
          value='Neighborhoods'
        >
          <option value="plaza midwood">Plaza Midwood</option>
          <option value="Dilworth">Dilworth</option>
          <option value="Wesley Heights">Welsey Heights</option>
          <option value="South Park">South Park</option>
        </select>
        <br></br>
        <label htmlFor="restaurant">Restaurant:</label>
        <input
          id="name"
          onChange={handleChange}
          value={formValues.name}
          placeholder= 'McDonalds'          
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
        <select
          id="working"
          onChange={handleChange}
          value='working'
        >
          <option value="true">true</option>
          <option value="false">false</option>
        </select>
        <br></br>
        <button type="submit" onSubmit={props.onSubmit}>Send</button>
      </form>
      {/* )<h1>Issues:</h1>
      {issues.map((issue) => (
        <div key={issue._id}>
          <h3>Type: {issue.type}</h3>
          <p>Subject: {issue.subject}</p>
          <p>Message: {issue.message}</p>
        </div>
      ))} */}
    </div>
  )
}

export default Form