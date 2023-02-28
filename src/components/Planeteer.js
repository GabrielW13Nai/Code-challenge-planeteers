import React, { useEffect, useState } from "react";

function Planeteer() {

  const [planet, setPlaneteer] = useState([])
  const [condition, setConditon] = useState(false)

  useEffect(()=>{
    fetch('http://localhost:8003/planeteers')
  .then (res=>res.json())
  .then (data => setPlaneteer(data))
},[]);

  function handleClick(){
    setConditon(condition=> !condition)
  }
return planet.map(info=> {
  return (
    <li className="cards__item">
      <div className="card">
        <img
          src={info.pictureUrl}
          alt={info.name}
          className="card__image"
          onClick={handleClick}
        />
        <div className="card__content">
          <div className="card__title">{info.name}</div>
          <p className="card__text">{condition?info.bio:info.quote}</p>
          <div className="card__detail">
            <p>{info.twitter}</p>
            <p>
              {
                info.fromUSA==='false'?'Working Overseas':'From USA'
              }
            </p>
          </div>
        </div>
      </div>
    </li>
  )})
}

export default Planeteer;
