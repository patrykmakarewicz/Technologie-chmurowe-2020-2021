import './List.css';
import { Redirect } from 'react-router';
import axios from 'axios';
import { useState, useEffect } from 'react';


function List(props) {
  const login = props.location.state.login;
  const [redirect, setRedirect] = useState(false);
  const [data, setData] = useState([]);


  useEffect(() => {
  const fetchData = async () => {
    axios
      .get(`http://localhost/api/api/list/get/${login}`)
      .then((res) =>
        res.data.map((item) => {
          return {
            id: item._id,
            description: item.description,
            date: item.date,
            done: item.done
          };
        })
      )
      .then((res) => setData(res));
  };
  fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);


  function handleRemove(id){
    axios
      .delete(`http://localhost/api/api/list/delete/${id}`, {params: {_id: id}})
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
      window.location.reload();
  }

  function handleDone(id){
    axios
      .put(`http://localhost/api/api/list/update/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
      window.location.reload();
  }


  function renderTable(){
    return data.map((item) => {
      const {id, description, date, done} = item;
      return (
        <tr key={id}>
          <td>{description}</td>
          <td>{date.split('T')[0]}</td>
          <td>{done.toString()}</td>
          <td>
            {!done && 
            <button 
              key={id}
              onClick={() => handleDone(id)}>
              Done
            </button>}
          </td>
          <td>
            <button 
              key={id}
              onClick={() => handleRemove(id)}>
              Remove
            </button>
          </td>
        </tr>
      )
    })
  };



  return (
    <div className="container">
      <div className = "list">
        {console.log(data.length)}
        <button
          className="button"
          type="button"
          onClick={() => setRedirect(true)}>
            Add
        </button>
        <table>
          <tbody>
            <tr>
              <th>Description</th>
              <th>Date</th>
              <th>Done</th>
              <th>Set as done</th>
            </tr>
          {renderTable()}
          </tbody>
        </table>



        {redirect && <Redirect push to={{
            pathname: "/add",
            state: {login: login}}}
/>}
      </div>
    </div>
  );
}

export default List;
