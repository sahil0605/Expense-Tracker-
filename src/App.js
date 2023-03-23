import React ,{useState} from 'react';
import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/Expenses/Expensesitem";
import './components/Expenses/expenses.css';
import Card from './components/UI/Card';
import NewExpense from "./components/NewExpense/NewExpense";
import ExpensesFilter from "./components/Expenses/ExpensesFilter";
import ExpenseChart from './components/Expenses/ExpensesChart';

const dummyExpense = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

function App() {
  
const [expenses , setExpenses] =useState(dummyExpense);
  const addExpenseHandler=expense=>{
        setExpenses((prevExpense)=>{
          return [expense,...prevExpense];
        });
  };
  
         const [filteredYear , setFilteredYear]=useState('2020');
         const filterChangeHandler = selectedYear =>{
          setFilteredYear(selectedYear);
         
  };
  const filteredExpenses= expenses.filter(expense=>{
         return expense.date.getFullYear().toString()===  filteredYear;
  }); 

  

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
     
    <Card className="expenses">
    <ExpensesFilter selected ={filteredYear} onChangeFilter ={filterChangeHandler}></ExpensesFilter>
    <ExpenseChart expenses ={filteredExpenses}/>
    {filteredExpenses.length === 0 && <p  className="expenses-list__fallback">No Expense Found</p>}
      { filteredExpenses.length >0 &&  filteredExpenses.map((expense)=>(
      <ExpenseItem
      key ={expense.id}
      title = {expense.title}
      amount = {expense.amount}
      date= {expense.date}
      />
    ))}

    </Card>
    </div>
  );
}

export default App;
