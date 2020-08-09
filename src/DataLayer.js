import React, { createContext, useContext, useReducer } from "react"

// Here childern is the App component that is passed in the index.js
export const DataLayerContext = createContext();

export const DataLayer = ({ initialState, reducer, children }) => (
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DataLayerContext.Provider>
);

// To use the data layer value.
export const useDataLayerValue = () => useContext(DataLayerContext);

 