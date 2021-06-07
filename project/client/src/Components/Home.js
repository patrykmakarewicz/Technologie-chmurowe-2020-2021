import './Home.css';
import axios from 'axios';
import { useState } from 'react';
import { Redirect } from 'react-router';


function Home() {
  const [user, setUser] = useState(false)
  const [login, changeLogin] = useState("");
  const [password, changePassword] = useState("");
  const [error, setError] = useState(false)

  const handleChangeLogin = (login) => changeLogin(login);
  const handleChangePassword = (password) => changePassword(password);

  const handleClick = () => {
    axios
      .post('http://localhost/api/api/users/login', {login, password})
      .then(() => {
        setUser(true);
      })
      .catch(() => {
        setError(true);
      })
  }


  return (
    <div className="Home">
      <div className="Login">
        <input
          className="LoginInput"
          placeholder = "Login"
          onChange={(event) => handleChangeLogin(event.target.value)}/>
        <input
          className="LoginInput"
          placeholder = "Password"
          type = "password"
          onChange={(event) => handleChangePassword(event.target.value)}/>
        {error && <p>User does not exist</p>}
        <button
          className="button"
          type = "button"
          onClick={handleClick}>
              Login
        </button>
        <button
          className="button"
          type = "button">
            <a href="/register">
              Register
            </a>
        </button>
      </div>
      {user && <Redirect push to={{
                            pathname: "/list",
                            state: {login: login}}}
              />}
    </div>
  );
}

export default Home;
