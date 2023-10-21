import React, { useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
    const { expenses } = useContext(AppContext);

// render these expenses out in our jsx 
return (
    <ul className='list-group'>
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

export default ExpenseList;