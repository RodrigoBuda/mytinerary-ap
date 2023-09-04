
import { useState, useEffect } from "react";
import TextCarrusel from "../components/TextCarrusel";
import Carrusel from "../components/Carrusel";
import axios from "axios"
import apiUrl from "../apiUrl.js"
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import city_actions from '../store/actions/cities'

const { read_carousel } = city_actions

export default function Home() {
  const nombre1 = "My";
  const nombre2 = " Tinerary";


  
  const [show, setShow] = useState(true)

  //const store = useSelector(store => store.cities)
  //console.log(store)
  //const city_reducer = useSelector(store =>store.cities)
  //console.log(city_reducer)

  const carousel = useSelector(store =>store.cities.carousel)
  console.log(carousel)
  const dispatch = useDispatch()

  useEffect(
    ()=>{
      if (carousel.length === 0){

        dispatch(read_carousel())
      }
    },
    []
    )


  return (
    <main className="home">
      <div className="cont-main-home ">
        <div className="cont-textcarrusel-home">
          <TextCarrusel />
        </div>
        <div className="cont-carrusel-home">
          <Carrusel data={carousel} />
        </div>
      </div>
    </main>
  );
}
