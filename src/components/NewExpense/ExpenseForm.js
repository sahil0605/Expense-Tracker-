import React, {useState} from 'react';
import './ExpenseForm.css'

const ExpenseForm =(props)=>{

    const [prevName , newName] = useState('');
    const [prevAmount , newAmount] = useState('');
    const [prevDate , newDate] = useState('');

    const titleChangeHandler =(event)=>{
    newName(event.target.value);
   
};

const amountChangeHandler = (event)=>{
     newAmount(event.target.value);
};

const dateChangeHandler = (event)=>{
     newDate(event.target.value);
};

const submitHandler =(event)=>{
       event.preventDefault();
       const expenseData={
          title:prevName,
          amount : prevAmount,
          date: new Date(prevDate)
       };
       props.onSaveExpenseData(expenseData);
       newName('');
       newAmount('');
       newDate('');

};

      return <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type="text" value={prevName} onChange ={titleChangeHandler}/>
            </div>

        </div>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type="number" min='0.01' step ='0.01' value={prevAmount} onChange={amountChangeHandler}/>
            </div>

        </div>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type="date" min ='2019-01-01' max ='2022-12-31' value={prevDate} onChange={dateChangeHandler}/>
            </div>

        </div>
        <div className='new-expense__actions'>
            <button type='button' onClick={props.onCancel}>Cancel</button>
            <button type='submit'>Add Expense</button>
        </div>
      </form>
};

export default ExpenseForm ;