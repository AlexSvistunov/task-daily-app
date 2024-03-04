import "./Auth.css";
import { useState } from "react";

const Auth = ({ propWord, onClickAuth }) => {

  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const passwordOnChangeHandler = (value) => {
    setPassword(value)
  }

  const emailOnChangeHandler = (value) => {
    setEmail(value)
  }

  return (
    <>
      <div className="container">
        <div className="auth">
          <div className="auth__inner">
            <h3 className="auth__title">{propWord} to HabitHub</h3>

            <div className="auth__fields">
              <div className="auth__field">
                <input
                  className="auth__input"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => emailOnChangeHandler(e.target.value)}
                ></input>
              </div>
              <div className="auth__field">
                <input
                  className="auth__input"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => passwordOnChangeHandler(e.target.value)}
                ></input>
              </div>
            </div>
            <button className="auth__btn" onClick={() => {onClickAuth(email, password)}}>{propWord}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
