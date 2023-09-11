import { useRef,useEffect } from "react";
import axios from "axios";
import Users from '../components/Users.jsx';
import apiUrl from "../apiUrl";
import { Link as Anchor  } from "react-router-dom";
import { useDispatch } from "react-redux";
import user_actions from '../store/actions/users'
const {read_6_users} = user_actions
export default function FormSignUp() {
  const name = useRef();
  const lastName = useRef();
  const country = useRef();
  const photo = useRef();
  const mail = useRef();
  const password = useRef();
  const dispatch = useDispatch()
  useEffect(
    ()=>{dispatch(read_6_users())},
    []
  )

    async function handleSignUp() {
    try {
      let data = {
        name: name.current.value,
        lastName: lastName.current.value,
        country: country.current.value,
        photo: photo.current.value,
        mail: mail.current.value,
        password: password.current.value,
      };
      await axios.post(
        apiUrl + "users/signup", //url del endpoint de creacion
        data //objeto con los datos para crear
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    
  }
  return (
    <form className="form-signup">
      <Users/>
        <div className="cont-form-signup">
        <h2 className="h2-createAccount">Create Account </h2>
          <input
            className="input-form-signup"
            ref={name}
            type="text"
            name="name"
            id="name"
            placeholder="Name"
          />
          <input
            className="input-form-signup"
            ref={lastName}
            type="text"
            name="lastName"
            id="lastName"
            placeholder="LastName"
          />
          <input
            className="input-form-signup"
            ref={country}
            type="text"
            name="country"
            id="country"
            placeholder="Country"
          />
          <input
            className="input-form-signup"
            ref={photo}
            type="text"
            name="photo"
            id="photo"
            placeholder="Photo"
          />
          <input
            className="input-form-signup"
            ref={mail}
            type="text"
            name="mail"
            id="mail"
            placeholder="Mail"
          />
          <input
            className="input-form-signup"
            ref={password}
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <input
            className="button-form-signup"
            type="button"
            value="Sign Up!"
            onClick={handleSignUp}
          />
          <p>
            Already have an account?{" "}
            <Anchor
              className="state-signin-ap"
              to = '/auth/signin'
            >
              {" "}
              Sign In
            </Anchor>
          </p>
        </div>
      </form>
    )
  }

