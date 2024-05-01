"use client"
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react';

export default function MuaBanXe() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <></>;
    return (
        <div className='container mx-auto dark:'>
            <span>The current theme is: {theme}</span>
            <button onClick={() => setTheme('light')}>Light Mode</button>
            <button onClick={() => setTheme('dark')}>Dark Mode</button>
        </div>
    )
}