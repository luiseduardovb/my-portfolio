import { Switch, Route } from "react-router-dom";

//Components
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/about-me">
          <AboutMe />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
