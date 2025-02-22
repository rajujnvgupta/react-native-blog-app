import React, { useReducer } from "react";

export default (reducer, actions, initialState) => {
    console.log('raju ', 9)

    const Context = React.createContext();
    console.log('raju ', 10)

    const Provider = ({ children }) => {
        console.log('raju ', 11)

        const [state, dispatch] = useReducer(reducer, initialState);
        console.log('raju ', 12)

        const boundActions = {};
        for (let key in actions){
            console.log('raju ', 13)

            boundActions[key] = actions[key](dispatch);
            console.log('raju ', 14)

        }

        console.log('raju ', 15)

        return (
            <Context.Provider value={{state, ...boundActions }}>
                {        console.log('raju ', 16)}
                {children}
                {        console.log('raju ', 17)}

            </Context.Provider>
        );
    };
        console.log('raju ', 18)

    return { Context, Provider };
};