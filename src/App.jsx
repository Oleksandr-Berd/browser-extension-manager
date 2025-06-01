import { useContext, useState } from "react";
import * as SC from "./AppStyled";

import ThemeContext from "./context/styled/themeContext";
import lightTheme from "./styled/lightTheme";
import darkTheme from "./styled/darkTheme";
import { ThemeProvider } from "@emotion/react";
import Header from "./layouts/Header/Header";
import ExtensionList from "./components/ExtensionList/ExtensionList";
function App() {
  const { theme } = useContext(ThemeContext);
const [filter, setFilter] = useState("all")
  const commonTheme = theme === "light" ? lightTheme : darkTheme;

const handleFilter = (currentFilter) => setFilter(currentFilter)
  
console.log(filter);


  return (
    
      <ThemeProvider theme={commonTheme}>
        <SC.AppStyled>
        <Header test={theme}/>
        <ExtensionList handleFilter={handleFilter}/>
        </SC.AppStyled>
      </ThemeProvider>
    
  );
}

export default App;
