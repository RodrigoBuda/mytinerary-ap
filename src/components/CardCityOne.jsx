import { useState, useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import itinerary_actions from "../store/actions/itineraries"

import { Link as Anchor } from 'react-router-dom'

const { read_itineraries_from_city } = itinerary_actions

export default function CardCityOne({ src, alt, text, id, smalldescription }) {
    const [show, setShow] = useState(false)
    const itineraries = useSelector(store=>store.itineraries.itineraries_from_city)
    const dispatch = useDispatch()
    useEffect(
        ()=>{dispatch(read_itineraries_from_city({city_id:id }))},
        []
      )
    return (
        <>
        <div className="cont-cardCityOne" >
          <img className="img-carousel-card" src={src} alt={alt} />
          <h3 className="h3-city-cardCityOne"> {text} </h3>
          <p> {smalldescription} </p>
     <Anchor onClick={()=>setShow(!show)} className="button-cardCityOne">{show ? ('hide') : ('+info')}</Anchor>  
     {show && itineraries.map((each,index)=><p key={index}>{each.name}</p>)}
        </div>
        
        </>
    );
  }

      
