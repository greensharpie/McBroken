import { useState } from "react"; 
import axios from 'axios'
import { BASE_URL } from "../globals";

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

  return(
    <div>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Submit Restaurant</label>
        <br></br>
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