import React, { useState, useEffect } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        console.log('title....')
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        console.log('amount....')
    }

    const dateHandler = (event) => {
        setEnteredDate(event.target.value);
        console.log('date....')
    }
    useEffect(() => console.log(enteredAmount), [enteredAmount])

    const submitHandler = (event) => {
        console.log('submit....')
        event.preventDefault();

        const expenseItem = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseItem);
        // console.log(expenseItem);
        
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className='new-expense__controls'>
                    <label>title</label>
                    <input required type='text' value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__controls'>
                    <label>amount</label>
                    <input required type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__controls'>
                    <label>date</label>
                    <input required type='date' min='2021-01-01' max='2022-12-31' value={enteredDate} onChange={dateHandler} />
                </div>
                <button type='Submit'>Add Expense</button>
            </div>
        </form>
    );

}
export default ExpenseForm;

