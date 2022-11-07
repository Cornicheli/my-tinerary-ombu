import React, { useState } from 'react'
import './NewCity.css'
import { useNavigate } from 'react-router-dom';

// funcionando correcto

export default function SignUp(){

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('user', JSON.stringify({name, surName, country, continent, photo, population, mail}));
        navigate('login');
    }

const [name, setName] = useState("");
const [surName, setSurName] = useState("");
const [country, setCountry] = useState("");
const [continent, setContinent] = useState("")
const [photo, setPhoto] = useState("")
const [population, setPopulation] = useState("")
const [mail, setMail] = useState("");

const submit = () => {
    if (name === '' || surName === '' || country === '' ||  mail === ''){
    } else {
        localStorage.setItem("name", name);
        localStorage.setItem("surName", surName);
    }
};

return (
<>
    <div className='contentCity'>
            <div className='content-form'>
                <h2>City</h2>
        <form onSubmit={handleSubmit}>

            <label htmlFor="text">Name</label>
            <input
                name = 'name'
                value={name}
                type="text"
                placeholder='Name'
                onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="text">LastName</label>
            <input
                name = 'surName'
                value={surName}
                type="text"
                placeholder="SurName"
                onChange={(e) => setSurName(e.target.value)}
            />

            <label htmlFor="text">Country</label>
            <input
                name = 'country'
                value={country}
                type="text"
                placeholder="Country"
                onChange={(e) => setCountry(e.target.value)}
            />

            <label htmlFor="text">Continent</label>
            <input
                name = 'continent'
                value={continent}
                type="text"
                placeholder="continent"
                onChange={(e) => setContinent(e.target.value)}
            />
            
            <label htmlFor="text">Photo</label>
            <input
                name = 'photo'
                value={photo}
                type="text"
                placeholder="Photo"
                onChange={(e) => setPhoto(e.target.value)}
            />
            
            <label htmlFor="text">Population</label>
            <input
                name = 'Population'
                value={population}
                type="text"
                placeholder="Population"
                onChange={(e) => setPopulation(e.target.value)}
            />

            <label htmlFor="email">Email</label>
            <input
                name = 'mail'
                value={mail}
                type="email"
                placeholder="Email"
                onChange={(e) => setMail(e.target.value)}
            />

            <div className='bottom'>
                <button className='botom' type='submit' onClick={submit}>Register</button>
            </div>
        </form>
        </div>
    </div>
</>
)}