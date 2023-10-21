import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
    const { expenses } = useContext(AppContext);
    
    // this function will add up the cost
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    // the 0 is added below to specific the starting value 
    }, 0)
    
    return (
        // add alert-danger for red background 
        <div className="alert alert-warning">
            <span>Spent so far: ${totalExpenses}</span>
        </div>
    );
};

export default ExpenseTotal;