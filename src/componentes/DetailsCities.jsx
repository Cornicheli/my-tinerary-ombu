import React from "react";
import { useParams } from "react-router-dom";
import { cities } from '../date/dataCities.js'
import './DetailsCities.css'


const DetailsCities = () =>  {

    let {detailscitiesid} = useParams()


    let detailSelec = cities.find( datacities=> datacities.id ===  detailscitiesid )
    console.log(detailSelec)

    return (
        <h5>{detailSelec.name}</h5>
)}
export default DetailsCities