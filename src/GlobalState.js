import {createContext, useState} from 'react'

export const GlobalContext = createContext();

export const GlobalProvider = (props) =>{
    const [money, setMoney] = useState(128000000000)
    return(
        <GlobalContext.Provider value={{money,setMoney}}>
                {props.children}
        </GlobalContext.Provider>
    )
}