import React, { useState } from 'react';
import ExpenseDetail from './ExpenseDetail';
import ExpenseDate from './ExpenseDate';
import './Expenseitem.css';
import Card from '../Cards/Card';

function Expenseitem(props) {
    
    const [title, setTitle] = useState(props.title);

     const clickHandler = (ev) => {
        setTitle('updated!!')
        console.log(title)
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
            <h2>{title}</h2>
            </div>
            <div>
            <ExpenseDetail amount={props.amount} />
            </div>
            <button onClick={clickHandler}>DeleteExpense</button>
        </Card>
    
)}

export default Expenseitem