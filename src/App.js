import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './components/Budget';
import AddExpenseForm from './components/AddExpenseForm';
import ExpenseItem from './components/ExpenseItem';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import UserLoginForm from './components/UserLoginForm'; // Update this line
import { AppProvider } from './context/AppContext';

const App = () => {
  return (
    <AppProvider>
      <div className='container'>
        <h1 className='mt-3'>Expense App</h1>
        <div className="row mt-3">
          <div className="col-sm">
            <Budget />
          </div>
          <div className='col-sm'>
            <Remaining />
          </div>
          <div className='col-sm'>
            <ExpenseTotal />
          </div>
        </div>
        <h3 className='mt-3'>Expenses</h3>
        <div className='row mt-3'>
          <div className='col-sm'>
            <ExpenseList />
          </div>
        </div>
        <h3 className='mt-3'>App Expense</h3>
        <div className='mt-3'>
          <div className='col-sm'>
            <AddExpenseForm />
          </div>
        </div>
        <UserLoginForm /> {/* Add this line to render the UserLoginForm component */}
      </div>
    </AppProvider>
  );
};

export default App;


