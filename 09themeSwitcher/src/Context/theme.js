import {createContext, useContext} from "react";

// Providing default values in ThemeContext
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {}
})

// Provider
export const ThemeProvider = ThemeContext.Provider

// Custom Hook
export default function useTheme() {
    return useContext(ThemeContext)
}