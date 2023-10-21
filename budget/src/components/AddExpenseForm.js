import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';

const AddExpenseForm = (props) => {
  const { dispatch } = useContext(AppContext);

  const [name, setName] = useState('');
  const [cost, setCost] = useState('');

  const onSubmit = (event) => {
    // prevent page from loading whenever button is clicked
    event.preventDefault();
    
    const expense = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost),
    };

    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <div className='row'>
        <div className='col-sm'>
          <label for='name'>Name</label>
          <input 
              required='required'
              type='text'
              className='form-control'
              id='name'
              value={name}
              onChange={(event) => setName(event.target.value)}
            ></input>
        </div>
        <div className='col-sm'>
          <label form='cost'>cost</label>
          <input  
            required='required'
            type='text'
            className='form-control'
            id='cost'
            value={cost}
            onChange={(event) => setCost(event.target.value)}
          ></input>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
  <button type="submit" className="btn btn-primary">
    Save
  </button>
</div>
      </div>
    </form>
  )
}

export default AddExpenseForm;
