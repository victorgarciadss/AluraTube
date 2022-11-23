import { createContext, useState } from "react";

export const ColorModeContext = createContext({
    mode: ""
});

const ColorModeProvider = (props) => {

    const [mode, setMode] = useState(props.initialMode);

    const toggleMode = () => {

        if(mode === "dark"){
            setMode("light");
        }
        else{
            setMode("dark");
        }
    }
    
    return(
        <ColorModeContext.Provider value={{ mode: mode, setMode: setMode, toggleMode: toggleMode}}>
            {props.children}
        </ColorModeContext.Provider>
    )
}

export default ColorModeProvider;