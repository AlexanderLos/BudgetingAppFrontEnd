import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
 
const Budget = () => {
const { budget } = useContext(AppContext);

    return (
        // get blue background effect, use bootstrap alert-primary
        <div className='alert alert-primary'>
            <span>Budget: ${budget}</span>
        </div>
    )
}

export default Budget;