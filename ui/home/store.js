import React from 'react';
import {reducer, initialState} from "./reducer";

const Store = React.createContext();
Store.displayName = 'Home';

export const useStore = () => React.useContext(Store);

export const StoreProvider = ({ children }) => {
    const [globalState, dispatch] = React.useReducer(reducer, initialState);

    return (
        <Store.Provider value={[globalState, dispatch]}>{children}</Store.Provider>
    );
};