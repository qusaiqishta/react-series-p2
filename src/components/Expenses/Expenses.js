import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("all");
  const filterChnageHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses=props.items.filter(expense=>{
    return expense.date.getFullYear().toString()===filteredYear;
  })

  let expensesContent=<h3 style={{textAlign:"center" , color:"red"}}>No Expenses Found</h3>
  if(filteredExpenses.length>0){
    expensesContent=filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  }
  else if(filteredYear=='all'){
    expensesContent=props.items.map((expense)=>{
      return(
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
     ) })
  }
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChnageHandler}
      />
      {expensesContent}
    </Card>
  );
};

export default Expenses;
