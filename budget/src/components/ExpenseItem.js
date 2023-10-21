import React from 'react';
import { TiDelete } from 'react-icons/ti';

const ExpenseItem = (props) => {
    return (
      // d-flex is a bootstrap class that says this is a flexbox containers
      // bootstrap helper classes that helps align content
      <li className='list-group-item d-flex justify-content-between align-items-center'>
      {/* passing prop name below from expenseitem */}
          {props.name}
          <div>
            {/* // using badge in the CN, will give the blue background color */}
            <span className='badge badge-primary badge-pill mr-3'>
              {/* passing prop cost below from expenselist */}
              ${props.cost}
              {/* below render out a delete icon */}
              <TiDelete size='1.5em'></TiDelete>
            </span>
          </div>
      </li>
    )
  }
  
  export default ExpenseItem;