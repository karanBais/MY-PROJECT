import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  // const [enterTitle, setEnterTitle] = useState(" ");
  // const [enteredAmount, setEnteredAmount] = useState("");
  // const [enteredDate, setEnteredDate] = useState("");
  // <----------------OR------------------------------>

  const [userTitle, setUserTitle] = useState({
    enteredTitle : "",
    enteredAmount : "",
    enteredDate : "",
  })

  const titleChangeHandler = (event) => {
    // setUserTitle({
    //   ...userTitle,
    //   enteredTitle : event.target.value,
    // })
    // OR
    // setEnterTitle(event.target.value);

    //<---- Correcy way to write------>

    setUserTitle((prevState) => {
      return{
        ...prevState,
        enteredTitle : event.target.value
      }
    })
  };
  const amountChangeHandler = (event) => {
    // setUserTitle({
    //   ...userTitle,
    //   enteredAmount : event.target.value,
    // })
    // OR
    // setEnteredAmount(event.target.value);

    //<---- Correcy way to write------>

    setUserTitle((prevState) => {
      return{
        ...prevState,
        enteredAmount : event.taregt.value
      }
    })
  };

  const dateChangeHandler = (event) => {
    // setUserTitle({
    //   ...userTitle,
    //   enteredDate : event.target.value,
    // })
    // OR
    // setEnteredDate(event.target.value);

    //<---- Correcy way to write------>

    setUserTitle((prevState) =>{
      return{
        ...prevState,
        enteredDate : event.target.value
      }
    })
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label> Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label> Amount</label>
          <input type="number" onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label> Date</label>
          <input type="date" min="2024-01-01" max="2025-12-31"  onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__action">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
