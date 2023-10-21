// create a context, this is the thing our components import and use to get the state
import { createContext, useReducer } from 'react';

const AppReducer = (state, action) => {
    switch(action.type){
        default:
            return state;
    }
}

// setup initial state which context will use when app loads
const initialState = {
    budget: 2000,
    expenses: [
        { id: 12, name: 'shopping', cost: 40 },
        { id: 13, name: 'holiday', cost: 400 },
        { id: 13, name: 'car service', cost: 50 },
    ],
};

// this is saying to react, createcontext and assign it to the appcontext variable 
export const AppContext = createContext();

// a provider grabs the component we want to pass certain state values to, holds the state
export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return(
        <AppContext.Provider 
            value={{
                budget: state.budget,
                expenses: state.expenses,
                dispatch
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};