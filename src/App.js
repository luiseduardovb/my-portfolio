import { Switch, Route } from "react-router-dom";

//Components
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div>
      <NavBar />
      <div style={{ minHeight: "1200px" }}>
        <Switch>
          <Route path="/about-me">
            <AboutMe />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
