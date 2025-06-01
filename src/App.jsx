import { useContext } from "react";
import * as SC from "./AppStyled";

import ThemeContext from "./context/styled/themeContext";
import lightTheme from "./styled/lightTheme";
import darkTheme from "./styled/darkTheme";
import { ThemeProvider } from "@emotion/react";
import Header from "./layouts/Header/Header";
function App() {
  const { theme } = useContext(ThemeContext);

  const commonTheme = theme === "light" ? lightTheme : darkTheme;


  
  return (
    
      <ThemeProvider theme={commonTheme}>
        <SC.AppStyled>
        <Header test={theme}/>
        </SC.AppStyled>
      </ThemeProvider>
    
  );
}

export default App;
