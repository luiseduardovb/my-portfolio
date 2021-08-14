import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

//Components
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import NavBar from "./components/NavBar";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import { ThemeProvider } from "@material-ui/styles";
import { lightTheme, darkTheme } from "./styles/theme";

const App = () => {
  const [appTheme, setAppTheme] = useState("LITEMODE");
  const theme = appTheme === "DARKMODE" ? { ...darkTheme } : { ...lightTheme };
  return (
    <div>
      <ThemeProvider theme={theme}>
        <NavBar appTheme={appTheme} setAppTheme={setAppTheme} />
        <Switch>
          <Route path="/">
            <Home />
            <Skills />
            <Projects />
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default App;
