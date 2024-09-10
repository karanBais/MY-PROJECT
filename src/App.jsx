import Expenses from "./Components/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense"

function App() {
  const expenses = [
    { id: "1", date: new Date(2023, 7, 15), title: "Insurance", price: 100 },
    { id: "2", date: new Date(2023, 3, 25), title: "Book", price: 10 },
    { id: "3", date: new Date(2023, 10, 11), title: "Pen", price: 1 },
    { id: "4", date: new Date(2023, 1, 14), title: "Laptop", price: 200 },
  ];

  const getExpenseDataHandler = (expenseDataRecive) =>{
    console.log(expenseDataRecive);
  };

  
  return (
    <div>
      <NewExpense onExpenseData={getExpenseDataHandler} />
     <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;





// "TypeError: Cannot assign to read only property 'message' of object 'SyntaxError: /src/components/NewExpense/NewExpense.js: 'return' outside of function. (10:5)

//    8 |      };
//    9 |      
// > 10 |      return(
//      |      ^
//   11 |          <div className="new-expense">
//   12 |              <ExpenseForm  onSaveExpenseData={saveExpenseDataHandler}/>
//   13 |          </div>'
//     at https://2-13-2-sandpack.codesandbox.io/static/js/sandbox.1f8cbcbe3.js:1:251241
//     at ze.handleCallResponse (https://2-13-2-sandpack.codesandbox.io/static/js/sandbox.1f8cbcbe3.js:1:251360)
//     at ze.handleMessage (https://2-13-2-sandpack.codesandbox.io/static/js/sandbox.1f8cbcbe3.js:1:249855)
//     at Worker.<anonymous> (https://2-13-2-sandpack.codesandbox.io/static/js/sandbox.1f8cbcbe3.js:1:250340)"
// "TypeError: Cannot assign to read only property 'message' of object 'SyntaxError: /src/components/NewExpense/NewExpense.js: 'return' outside of function. (10:5)

//    8 |      };
//    9 |      
// > 10 |      return(
//      |      ^
//   11 |          <div className="new-expense">
//   12 |              <ExpenseForm  onSaveExpenseData={saveExpenseDataHandler}/>
//   13 |          </div>'
//     at https://2-13-2-sandpack.codesandbox.io/static/js/sandbox.1f8cbcbe3.js:1:251241
//     at ze.handleCallResponse (https://2-13-2-sandpack.codesandbox.io/static/js/sandbox.1f8cbcbe3.js:1:251360)
//     at ze.handleMessage (https://2-13-2-sandpack.codesandbox.io/static/js/sandbox.1f8cbcbe3.js:1:249855)
//     at Worker.<anonymous> (
