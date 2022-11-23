import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import ColorModeProvider, { ColorModeContext } from "../src/components/Menu/ColorMode";
import RegisterVideo from "../src/components/RegisterVideo";
import { CSSReset } from "../src/styles/CSSReset";

const theme = {
    light: {
        backgroundBase: "#e3dada",
        backgroundLevel1: "#ffffff",
        backgroundLevel2: "#eeeeee",
        borderBase: "#888888",
        textColorBase: "#222222",
    },
    dark: {
        backgroundBase: "#181818",
        backgroundLevel1: "#202020",
        backgroundLevel2: "#313131",
        borderBase: "#383838",
        textColorBase: "#FFFFFF",
    }
};


const ProviderWrapper = (props) => {
    return(
        <ColorModeProvider initialMode={"dark"}>
            {props.children}
        </ColorModeProvider>
        
    )
}

function MyApp({ Component, pageProps }){

    const context = useContext(ColorModeContext);

    return(
      
        <ThemeProvider theme={theme[context.mode]}>
            <CSSReset />
            <Component {...pageProps} />
            <RegisterVideo />
        </ThemeProvider>
       
    ) 
}

export default function _App(props){

    return(
        <ProviderWrapper>
            <MyApp {...props} />
        </ProviderWrapper>
    )
}