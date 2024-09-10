import React from "react";
import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) =>{
    const saveExpenseDataHandler = (entrerexpenseData) => {
         const expData = {...entrerexpenseData, id: Math.random().toString()};
         props.onExpenseData(expData);
     };
     
     return(
         <div className="new-expense">
             <ExpenseForm  onSaveExpenseData={saveExpenseDataHandler}/>
         </div>
     );
 };
 
 export default NewExpense;
   