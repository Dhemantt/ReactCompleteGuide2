import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
const NewExpense = (props) => {
    const [isEditable, setIsEditable] = useState(false);

    const SaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        // console.log(expenseData);
        props.onAddExpenseData(expenseData);
    }

    const CancelHandler = () =>{
        setIsEditable(false);
    }

    const setEditableHandler = () =>{
        setIsEditable(true);
    }

    return (
        <div className='new-expense'>
            {!isEditable && <button onClick={setEditableHandler}>Add New Expense</button>}
            {isEditable && <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} onCancle={CancelHandler}/>}
        </div>
    );
}

export default NewExpense;