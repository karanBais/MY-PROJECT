import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"
function Expenses(props){
  return(
    <div>
      {props.expenses.map((expense, ) => {
        return (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            price={expense.price}
          ></ExpenseItem>
        );
      })}
    </div>
  )
}

export default Expenses