
import { useState, useEffect } from "react";
import TextCarrusel from "../components/TextCarrusel";
import Carrusel from "../components/Carrusel";
import axios from "axios"
import apiUrl from "../apiUrl.js"

export default function Home() {
  const nombre1 = "My";
  const nombre2 = " Tinerary";


  
  const [show, setShow] = useState(true)
  const [data, setData] =useState ([])
  useEffect(
    ()=>{
      axios(apiUrl+'cities/carousel')
        .then(res => setData(res.data.data_carousel))
        .catch(err=>console.log(err))
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
          <Carrusel data={data} />
        </div>
      </div>
    </main>
  );
}
