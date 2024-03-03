import "./Auth.css";

const Auth = ({ propWord }) => {
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
                ></input>
              </div>
              <div className="auth__field">
                <input
                  className="auth__input"
                  type="password"
                  placeholder="Password"
                ></input>
              </div>
            </div>
            <button className="auth__btn">{propWord}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
