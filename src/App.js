import React, {useState} from 'react';
import "./App.css";
import { Select } from '@material-ui/core';

// const ToDo = props => {
//   return(
//     <tr>
//     <td>
//       <label>{props.id}</label>
//     </td>
//     <td>
//       <input />
//     </td>
//     <td>
//       <label>{props.createdAt}</label>
//     </td>
//   </tr>
//   )
  
// }

// function App() {
//   const [todos,setTodos] = useState([{
//       id: 'todo1',
//       createdAt: '18:00',
//     }, {
//       id: 'todo2',
//       createdAt: '20:00',
//     }]);
  
//   const reverseList = () => {
//     setTodos([...todos].reverse());  
//   }

//   return (
//     <div className="App">
//       <h2>To do List</h2>
//       <button onClick={reverseList}>Reverse</button>
//       <table>
//         <tbody>
//           {todos.map((todo,index) => (
//             <ToDo key={index} id={todo.id} createdAt={todo.createdAt}/>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

function App () {
  const [score, setScore] = useState("10");
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Number(score)<= 5 && comment.length <=10 ) {
      alert("Please provide a comment explaining why the experience was poor.");
      return;
    }

    console.log("Form submitted");
    setComment('');
    setScore("10");
  }

  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Feedback Form</h2>
          <div className='Field'>
            <label htmlFor='rating'>How was it? {score} ⭐️ </label>
            <input
              type="range"
              min="0" max="10"
              id='rating' 
              value={score} 
              onChange={e => setScore(e.target.value)}
            />
            <div className='feedback'>
              <label>Give us feedbacks!  </label>
              <textarea id='feedback' value={comment} onChange={e => setComment(e.target.value)} />
            </div>
            <button type="submit" >Submit</button>
          </div>
        </fieldset>
      </form>
    </div>  
  )
};

export default App;
