import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import city_actions from "../store/actions/cities";
import CardCityOne from "../components/CardCityOne";
const { read_city } = city_actions

export default function Citydetail() {
  const {city_id} = useParams()
  const dispatch = useDispatch()

  const city = useSelector((store) => store.cities.city)
  console.log(city)
  useEffect(() => {
    dispatch(read_city({ id: city_id }));
  }, []);
  return(
    <>
    <CardCityOne src={city.photo}
        alt={city_id}
        text={city.city}
        id={city_id} 
        smalldescription = {city.smalldescription}  />
  </>
  );
}
