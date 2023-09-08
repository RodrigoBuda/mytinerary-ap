import { useState, useEffect, useRef } from "react";
import CardCity from "../components/CardCity";
import { useSelector, useDispatch } from "react-redux";
import city_actions from "../store/actions/cities";

const { read_cities } = city_actions;

export default function Cities() {
  const cities = useSelector((store) => store.cities.cities);
  const [reEffect, setReEffect] = useState(true);
  const text = useRef();
  const dispatch = useDispatch();
  console.log(cities);

  useEffect(() => {
    dispatch(read_cities({ text: text.current?.value }));
  }, [reEffect]);
  function handleFilter() {
    console.log(text);
    setReEffect(!reEffect);
  }
  return (
    <>
      <div className="cont-buscador">
        <input
          ref={text}
          className="buscador-cities"
          type="text"
          name="text"
          id="text"
          onKeyUp={handleFilter}
          placeholder="🔎"
        />
      </div>
      <div className="cont-cities">
        {cities.map((each) => (
          <CardCity
            key={each._id}
            src={each.photo}
            alt={each._id}
            text={each.city}
            id={each._id}
            small={each.smalldescription}
          ></CardCity>
        ))}
      </div>
    </>
  );
}
