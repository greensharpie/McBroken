import { useState, useEffect } from "react";  
import { Link } from 'react-router-dom'
import axios from 'axios'
import Hood from "./Hood";
import { BASE_URL } from '../globals'

const Neighborhoods = () => {
  const [neighborhoods, setNeighborhoods] = useState(null)

  useEffect(() => {
    const allNeighborhoods = async () => {
      const res = await axios.get(`${BASE_URL}/neighborhoods`)
      setNeighborhoods(res.data)
    }
    allNeighborhoods()
  }, [])

  return (
    <div className="neighborhoodsContainer">
      <h1>Neighborhoods</h1>
      <div className="neighborhoodsGrid">
        {neighborhoods?.map((neighborhood) => (
          <Link to={`/neighborhoods/${neighborhood._id}`} key={neighborhood._id}>
        {neighborhood.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Neighborhoods