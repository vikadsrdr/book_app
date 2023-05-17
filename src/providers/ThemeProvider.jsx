import { createContext, useMemo, useState } from "react";

export const ThemeContext = createContext({ isDark: false })


export const ThemeProvider = ({ children }) => {

    const [isDark, setIsDark] = useState(false);

    const value = useMemo(() => ({ isDark, setIsDark }), [isDark]);
    //ещё раз посм про useMemo (14-15 мин)

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

