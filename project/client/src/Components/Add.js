import './Add.css';
import axios from 'axios';
import { useState } from 'react';
import { Redirect } from 'react-router';


function Add(props) {
  const [success, setSuccess] = useState(false);
  const [description, changeDescription] = useState("");
  const [date, changeDate] = useState(null);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChangeDescription = (description) => changeDescription(description);
  const handleChangeDate = (date) => changeDate(date);

  const handleClick = () => {
    if (description === "" || date == null){
      setError(true);
      setErrorMsg("Fields can not be empty");
    }
    else{
        const login = props.location.state.login;
    axios
      .post('http://localhost/api/api/list/add', {login, description, date})
      .then(() => {
        setError(false);
        setSuccess(true);
      })
      .catch(() => {
        setError(true)
        setErrorMsg("Something went wrong, try again later");
      })
     }
  }

  return (
    <div className="container">
      <div className="add">
        <textarea
          className="listInputDesc"
          placeholder = "Description"
          onChange = {(event) => handleChangeDescription(event.target.value)}/>
        <input
          className="listInput"
          type="date"
          onChange = {(event) => handleChangeDate(event.target.value)}/>
        {error && <p>{errorMsg}</p>}
        <button
          className="button"
          type = "button"
          onClick={handleClick}>
            Add
        </button>
        {success && <Redirect push to={{
            pathname: "/list",
            state: {login: props.location.state.login}}}
/>}
      </div>
    </div>
  );
}

export default Add;

