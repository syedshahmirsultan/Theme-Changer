"use client"
import  { createContext, ReactNode, useState } from 'react';

export const ThemeContext = createContext({
    theme:"dark",
    switchLight : ()=>{},
    switchDark : ()=>{}
})

const ThemeProvider = ({children}: {children : ReactNode}) => {
    const [theme,setTheme] = useState("dark")

    const switchLight = ()=>{
        setTheme("light")
    }
    const switchDark = ()=>{
        setTheme("dark")
    }
    return (
        <ThemeContext.Provider value={{theme,switchLight,switchDark}}>
            <div className={`${theme}`}>{children}</div>
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;
