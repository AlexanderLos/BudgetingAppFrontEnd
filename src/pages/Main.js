// import React, { useContext } from 'react'; // Not being used.
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from '../components/Budget'
import AddExpenseForm from '../components/AddExpenseForm';
// import EditBudget from '../components/EditBudget'; // Not being use.d
// import ExpenseItem from '../components/ExpenseItem'; //These are not defined so i am commenting them out 
import Remaining from '../components/Remaining';
import ExpenseTotal from '../components/ExpenseTotal';
import ExpenseList from '../components/ExpenseList';
import { AppProvider } from '../context/AppContext';
import GIFPopUp from '../components/GIFPopUp';

const Main = () => {
  return (
    <AppProvider>
      <div className='container'>
      <h1 className='mt-3'>Expense App</h1>
        <div className="row mt-3">
          <div className="col-sm">
            <Budget />
        </div>
        <div className='col-sm'>
            <Remaining  />
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
      <div>
        <GIFPopUp />
      </div>
    </div>
    </AppProvider>
  );
};

export default Main;
