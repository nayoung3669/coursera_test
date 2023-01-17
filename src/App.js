import "./App.css";
import { useState } from "react";

function ListOfGoals(props) {
    return (
      <ul>
        {props.allGoals.map((g) => (
          <li>
            <span>My goal is to {g.goal}, by {g.by}</span>
          </li>
        ))}
      </ul>
    );
  }

function GoalForm(props) {

  const [formData,setFormData] = useState({
    goal: "",
    by:"",
  })

  function changeHandler (e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  
  function submitHandler (e) {
    e.preventDefault();
    props.onAdd(formData);
    setFormData({goal:"", by:""})
  }


    return (
      <form onSubmit={submitHandler}>
        <input type="text" name="goal" placeholder="Goal" value={formData.goal} onChange={changeHandler}></input>
        <input type="text" name="by" placeholder="by..." value={formData.by} onChange={changeHandler}></input>
        <button type="submit">Submit your goal</button>
      </form>
    )
}

function App() {

  const [allGoals,updateAllGoals] = useState([]);
  
  const addGoal = (goal) => { updateAllGoals([...allGoals, goal]); }
  
  return (
    <div className="App">
      <GoalForm onAdd={addGoal}/>
      <ListOfGoals allGoals={allGoals}/>
    </div>
  );
}

export default App;
