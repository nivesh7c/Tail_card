import { useEffect, useState } from "react";
export default function Usedarkmode() {
    const [theme,setTheme] =useState('dark');
    const colortheme = theme === 'dark' ? 'light' : 'dark';
    useEffect (() =>{
    const root = window.document.documentElement;
    root.classList.remove(colortheme);
    root.classList.add(theme);
    },[theme, colortheme])

    return [colortheme,setTheme];
    
}

