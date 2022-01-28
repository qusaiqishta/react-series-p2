import { useState } from "react/cjs/react.development";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense.js';
function App() {
  const DUMMY_EXPENSES = [
    { id: "e1", title: "new car", amount: 4000, date: new Date(2022, 1, 15) },
    { id: "e2", title: "T-shirt", amount: 30, date: new Date(2022, 1, 1) },
    { id: "e3", title: "beer", amount: 50, date: new Date(2021, 1, 10) },
    { id: "e4", title: "food", amount: 100, date: new Date(2020, 2, 16) },
  ];
  const [expenses,setExpenses]=useState(DUMMY_EXPENSES);
  const addExpenseHandler=(expense)=>{
    setExpenses((prevState)=>{
      return [expense,...prevState]
    })
  }
  return (
    <div>
      <h1 style={{textAlign:"center", color:"#40005d"}}>Expenses Management App</h1>
      <NewExpense onAddExpense={addExpenseHandler}/>
     <Expenses items={expenses}/>
    </div>
  );
}

export default App;
