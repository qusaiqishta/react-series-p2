import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react/cjs/react.development";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseDate) => {
    const expenseDate = {
      ...enteredExpenseDate,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseDate);
  };
  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const cancelEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelEditingHandler}
        />
      )}    
      </div>
  );
};
export default NewExpense;
