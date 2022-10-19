import React, { useState } from "react";
import Card from "../Cards/Card";
import ExpenseFilter from "./ExpenseFilter";
import Expenseitem from "./Expenseitem";
import './Expenses.css';
function Expenses(props){

    const [filteredYear, setFilteredYear] = useState('2020')
    const filterChangeHandler = () => {
        setFilteredYear((selectedYear) => {
            setFilteredYear(selectedYear);
        })
    }

    return (
        <Card className="expenses">
            <ExpenseFilter 
            selected={filteredYear}            
            onChangeFilter={filterChangeHandler}/>
            {props.item.map( (x) => {
                return  (
                    <Expenseitem key={x.id} title={x.title} amount={x.amount} date={x.date} />
                )   
            })}
        </Card>    
    );
}

export default Expenses;