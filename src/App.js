import React, {useState} from 'react';
import "./App.css";

const ToDo = props => {
  return(
    <tr>
    <td>
      <label>{props.id}</label>
    </td>
    <td>
      <input />
    </td>
    <td>
      <label>{props.createdAt}</label>
    </td>
  </tr>
  )
  
}

function App() {
  const [todos,setTodos] = useState([{
      id: 'todo1',
      createdAt: '18:00',
    }, {
      id: 'todo2',
      createdAt: '20:00',
    }]);
  
  const reverseList = () => {
    setTodos([...todos].reverse());  
  }

  return (
    <div className="App">
      <h2>To do List</h2>
      <button onClick={reverseList}>Reverse</button>
      <table>
        <tbody>
          {todos.map((todo,index) => (
            <ToDo key={index} id={todo.id} createdAt={todo.createdAt}/>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
