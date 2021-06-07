import './Register.css';
import axios from 'axios';
import { useState } from 'react';
import { Redirect } from 'react-router';


function Register() {
  const [user, setUser] = useState(false)
  const [login, changeLogin] = useState("");
  const [email, changeEmail] = useState("");
  const [password, changePassword] = useState("");
  const [passwordRepeat, changePasswordRepeat] = useState("");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChangeLogin = (login) => changeLogin(login);
  const handleChangeEmail = (email) => changeEmail(email);
  const handleChangePassword = (password) => changePassword(password);
  const handleChangePasswordRepeat = (passwordRepeat) => changePasswordRepeat(passwordRepeat);

  const handleClick = () => {
    if (password !== passwordRepeat){
      setError(true);
      setErrorMsg("Passwords are different");
    }
    else{
    axios
      .post('http://localhost/api/api/users/register', {login,email, password})
      .then((res) => {
        setError(false);
        setUser(true);
        
      })
      .catch(({ res }) => {
        setError(true)
        setErrorMsg("This login is unavailable");
      })
     }
  }

  return (
    <div className="container">
      <div className="register">
        <input
          className="registerInput"
          placeholder = "Login"
          onChange = {(event) => handleChangeLogin(event.target.value)}/>
        <input
          className="registerInput"
          placeholder = "Email"
          onChange = {(event) => handleChangeEmail(event.target.value)}/>
        <input
          className="registerInput"
          placeholder = "Password"
          type = "password"
          onChange = {(event) => handleChangePassword(event.target.value)}/>
        <input
          className="registerInput"
          placeholder = "Repeat password"
          type="password"
          onChange = {(event) => handleChangePasswordRepeat(event.target.value)}/>
        {error && <p>{errorMsg}</p>}
        <button
          className="button"
          type = "button"
          onClick={handleClick}>
            Register
        </button>
        {user && <Redirect push to={{
            pathname: "/list",
            state: {login: login}}}
/>}
      </div>
    </div>
  );
}

export default Register;

