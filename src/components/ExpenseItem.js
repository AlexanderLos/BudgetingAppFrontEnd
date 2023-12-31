import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    // function for the delete button
    const handleDeleteExpense = () => {
      dispatch({
        type: 'DELETE_EXPENSE',
        payload: props.id,
      });
    };

    return (
      // d-flex is a bootstrap class that says this is a flexbox containers
      // bootstrap helper classes that helps align content
      
      <li className='list-group-item d-flex justify-content-between align-items-center'>
      {/* passing prop name below from expenseitem */}
          {props.name}
          <div>
            {/* // using badge in the CN, will give the blue background color */}
            <span >
              {/* passing prop cost below from expenselist */}
              ${props.cost}
              {/* below render out a delete icon */}
            </span>
            <TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete>
          </div>
      </li>
    )
  }
  
  export default ExpenseItem;