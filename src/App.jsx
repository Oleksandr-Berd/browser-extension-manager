import { useContext, useState } from "react";
import * as SC from "./AppStyled";

import ThemeContext from "./context/styled/themeContext";
import lightTheme from "./styled/lightTheme";
import darkTheme from "./styled/darkTheme";
import { ThemeProvider } from "@emotion/react";
import Header from "./layouts/Header/Header";
import ExtensionListConsole from "./components/ExtensionListConsole/ExtensionListConsole";
import ExtensionList from "./components/ExtensionList/ExtensionList";
import { getAll } from "./utils/services";
function App() {
  const { theme } = useContext(ThemeContext);
  const [filter, setFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [extensions, setExtensions] = useState(null)

  const commonTheme = theme === "light" ? lightTheme : darkTheme;

  const fetchExtensions = async () => {
    setIsLoading(true)
    const result = await getAll()
    setExtensions(result)
    setIsLoading(false)
  }



  const handleFilter = (currentFilter) => setFilter(currentFilter);

  console.log(`error: ${isError}; extensions:${extensions}, isLoading:${isLoading}, filter:${filter}`);

  return (
    <ThemeProvider theme={commonTheme}>
      <SC.AppStyled>
        <Header test={theme} />
        <ExtensionListConsole handleFilter={handleFilter} />
        <ExtensionList fetch={fetchExtensions} extensions={extensions}/>
      </SC.AppStyled>
    </ThemeProvider>
  );
}

export default App;
