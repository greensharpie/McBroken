
const Restaurant = ({name, address, phone, broken, working, update})  => {
  return (
    <div className='RestContainer'>
      <div className='Restinfo'>
        <h2>{name}</h2>
        <h3>{address}</h3>
        <h4>{phone}</h4>
        <h2>{broken}</h2>
        <h2>{working}</h2>
        <h2>{update}</h2>
      </div>
    </div>
  )
}

export default Restaurant