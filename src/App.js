import React from 'react'
import { Routes , Route } from 'react-router-dom'
import MainComplete from './componentes/layouts/mainComplete/MainComplete'
import Home1 from './componentes/Home1'
import SignUp from './componentes/SignUp'
import CardCities from './componentes/CardCities'
import NewCity from './componentes/NewCity'
import { HomeComplete } from './componentes/layouts/HomeComplete'
import DetailsCities from './componentes/DetailsCities'




export default function App() {
  return (
    <MainComplete>
      <Routes>
        <Route path='/home1' element = {<Home1/>} />
        <Route path='/signp' element = {<SignUp/>}/>
        <Route path='/cardcities' element ={<CardCities/>}/>
        <Route path='/newcity' element={<NewCity/>}/>
        <Route path='/homecomplete' element={<HomeComplete/>}/>
        <Route path='/detailscities/:detailscitiesid' element={<DetailsCities/>}/>
      </Routes>
    </MainComplete>

  )
}
