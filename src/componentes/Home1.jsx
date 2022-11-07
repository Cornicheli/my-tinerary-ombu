import React from 'react'
import './Home1.css';
import { Link as NavLink } from "react-router-dom";


export default function Home1() {
return (
    <>
        <main className="body">
            <div>
                <h1>Turisfront</h1>
            </div>
            <div className='box-botom'>
                <NavLink to='/cardcities'>
                    <button className='botom'>Cities</button>
                </NavLink>

                <NavLink to=''>
                    <button className='botom'>Hotel</button>
                </NavLink>
            </div>
        </main>
    </>
)
}
