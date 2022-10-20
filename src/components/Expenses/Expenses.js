import React, { useState } from "react";
import Card from "../Cards/Card";
import ExpenseFilter from "./ExpenseFilter";
import Expenseitem from "./Expenseitem";
import './Expenses.css';
function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('')
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    // const filteredExpenses = props.item.filter((expense) => {
    //     return expense.date.getFullYear().toString() === filteredYear
    // })
    return (
        <Card className="expenses">
            <ExpenseFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />
            {/* {filteredExpenses.length === 0 ? (<p>No Expense Found</p>) : */}
            {props.item.filter((expense) => {
                    return expense.date.getFullYear().toString() === filteredYear
                })
                .map((x) => {
                    return (
                        <Expenseitem
                            key={x.id}
                            title={x.title}
                            amount={x.amount}
                            date={x.date}
                        />
                    )
                })}
        </Card>
    );
}

export default Expenses;