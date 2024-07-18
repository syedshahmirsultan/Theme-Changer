"use client"
import  { createContext, ReactNode, useState } from 'react';


//ThemeContext
export const ThemeContext = createContext({
    theme:'dark',
    switchLight : ()=>{},
    switchDark : ()=>{}
})

//ThemeProvider Function
const ThemeProvider = ({children}: {children : ReactNode}) => {
    const [theme,setTheme] = useState('dark')

    //Light Mode Function
    const switchLight = ()=>{
        setTheme('light')
    }

    //Dark Mode Function
    const switchDark = ()=>{
        setTheme('dark')
    }
    //Return Statement
    return (
        <ThemeContext.Provider value={{theme,switchLight,switchDark}}>
            <div className={`${theme}`}>{children}</div>
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;
