import React from 'react'
import ChecBoxCities from './ChecBoxCities.jsx'
import CitiesCard from './CityCard.jsx'
import { Link as NavLink } from "react-router-dom";


export default function CardCities() {
    return (
    <>
        <div className='filters'>

        <ChecBoxCities/>

        <label className='inputs'>Serch Here</label>
        <input className='search' type="text"/>

        <NavLink to="/newcity">
            <li className="addCity">
                <a className="ancorLink"  href="-"> !! add your city !!</a>
            </li>
        </NavLink>

        </div>

        <div className='boxes'>
            <CitiesCard/>
        </div>
    </>
    )
}

