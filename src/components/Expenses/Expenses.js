import Card from "../Cards/Card";
import ExpenseFilter from "./ExpenseFilter";
import Expenseitem from "./Expenseitem";
import './Expenses.css';
function Expenses(props){
console.log(props)
    const filterChangeHandler = () => {

    }

    return (
        <Card className="expenses">
            <ExpenseFilter 
            
            onChangeFilter={filterChangeHandler}/>
            {props.item.map( (x) => {
                return  (
                    <Expenseitem title={x.title} amount={x.amount} date={x.date} />
                )   
            })}
            {/* <Expenseitem title={props.title[0]} amount={props.amount[0].amount} date={props.date[0].date} />
            <Expenseitem title={props.title[1]} amount={props.amount[1].amount} date={props.date[1].date} />
            <Expenseitem title={props.title[2]} amount={props.amount[2].amount} date={props.date[2].date} />
            <Expenseitem title={props.title[3]} amount={props.amount[3].amount} date={props.date[3].date} />    */}
        </Card>    
    );
}

export default Expenses;