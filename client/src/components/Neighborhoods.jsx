import { useState, useEffect } from "react";  
import { Link } from 'react-router-dom'
import axios from 'axios'
import Hood from "./Hood";

const Neighborhoods = () => {
  const [neighborhoods, setNeighborhoods] = useState([])

  useEffect(() => {
    const allNeighborhoods = async () => {
      const res = await axios.get(`/api/neighborhoods`)
      setNeighborhoods(res.data)
    }
    allNeighborhoods()
  }, [])

  return (
    <div className="neighborhoodsContainer">
      <h1>Neighborhoods</h1>

      <div className="neighborhoodsGrid">
        {neighborhoods?.map((neighborhoods) => (
          <Link to={`/neighborhoods/${neighborhoods._id}`} key={neighborhoods._id}>
            <Hood 
            name={neighborhoods.name}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Neighborhoods