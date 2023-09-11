import { useRef } from "react";
import { Link as Anchor } from "react-router-dom";



export default function FormSignIn() {

  const mail_signin = useRef();
  const password_signin = useRef()
  
    async function handleSignIn() {
      let data = {
        mail: mail_signin.current.value,
        password: password_signin.current.value,
      };
    console.log(data)
  }
  return (
    
      <form className="form-signup">
        <div className="cont-form-signup">
          <h3 className="h3-SignIn">Sign In</h3>
          <input
            className="input-form-signup"
            ref={mail_signin}
            type="text"
            name="mail"
            id="mail"
            placeholder="Mail"
          />
          <input
            className="input-form-signup"
            ref={password_signin}
            type="text"
            name="password"
            id="password"
            placeholder="Password"
          />
          <input
            className="button-form-signup"
            type="button"
            value="Sign In!"
            onClick={handleSignIn}
          />

          <p>
            Don't you have an account?{" "}
            <Anchor
              className="state-signin-ap"
              to = '/auth/signup'
            >
             
              Sign Up
            </Anchor>
          </p>
        </div>
      </form>
    )
  
}
