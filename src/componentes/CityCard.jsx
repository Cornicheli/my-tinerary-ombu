import React from 'react'
import { Link } from 'react-router-dom'
import './CityCard.css'
import { cities } from '../date/dataCities.js'

export default function CityCard() {
  const cityCard = cities.map(e => e)
  return (
    cityCard.map (e => {
      return(
        <div>
          <div className="box2">
            <div className='cont-img'>
              <img className="image" src={e.photo} alt="hotel" />
            </div>
            <h3>{e.name}</h3>
            <Link to={`/Details/${e.id}`} className='nav-cities'>See More</Link>
          </div>
      </div>
      )
    })
  )
}
