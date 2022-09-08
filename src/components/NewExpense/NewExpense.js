import React, {useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false)


  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData

    };
    props.onAddExpense(expenseData);
  };

  const handleEditing = () => {
    setIsEditing(true)
  }

  const handleCancelEditing = () => {
    setIsEditing(false)
  }

  return (
    <div className="new-expense">
      {/* pegando o valor do ExpenseForm, ou seja, passando as props do componente filho para o pai */}
      {!isEditing && <button onClick={handleEditing} >Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={handleCancelEditing}/>}
    </div>
  );
};

export default NewExpense;
