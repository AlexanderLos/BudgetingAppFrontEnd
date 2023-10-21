import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
    const expenses = [
        { id: 1232, name: "Shopping", cost: 50 },
        { id: 1232, name: "Holiday", cost: 300 },
        { id: 1232, name: "Transportation", cost: 70 },
        { id: 1232, name: "Fuel", cost: 40 },
        { id: 1232, name: "Child Care", cost: 500 },
    ];
// render these expenses out in our jsx 
return (
    <ul>
        {expenses.map(((expense)=>(
            // Below will display values as props then display those values as UI
            <ExpenseItem 
                id={expense.id}
                name={expense.name}
                cost={expense.cost} />
        )))}
    </ul>
)

};
