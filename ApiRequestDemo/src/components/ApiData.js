import React, { createContext, useContext, useEffect, useState } from "react";

const ApiData = createContext();

export const ApiDataProvider = ({children}) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch(
            `https://deckofcardsapi.com/api/deck/new/draw/?count=1`
            );
            if (!response.ok) {
            throw new Error(`HTTP error: Status ${response.status}`);
            }
            let getData = await response.json();
            setData(getData);
        } catch (err) {
            setData(null);
        } 
        };
        fetchData();
    }, []);

    return (
        <ApiData.Provider value={{ data }}>
          {children}
        </ApiData.Provider>
    );
}

export const useApiData = () => useContext(ApiData);
