import React, {useState} from "react";
import Expenses from "./Components/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense"

const DUMMY_EXPENSES = [
  { id: 1, title: "Insurance", date: new Date(2023, 7, 15), price: 100 },
  { id: 2, title: "Book", date: new Date(2024, 8, 25), price: 10 },
  { id: 3, title: "Pen", date: new Date(2025, 2, 10), price: 1 },
  { id: 4, title: "Laptop", date: new Date(2024, 9, 17), price: 200 },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) =>{
    setExpenses((prevExpense) =>{
      return [expense, ...prevExpense];
    })
    console.log(expense);
  };


  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
     <Expenses expenses={expenses} />
    </div>
  );
}

export default App;


