"use client"
import { ThemeProvider } from "next-themes"
import React from "react"

const ThemeClient = ({ children }: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <ThemeProvider attribute="class">
            {children}
        </ThemeProvider>
    )
}

export default ThemeClient