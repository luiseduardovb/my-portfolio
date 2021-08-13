import { Switch, Route } from "react-router-dom";

//Components
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div>
      <NavBar />
      <div style={{ minHeight: "1200px" }}>
        <Switch>
          <Route path="/">
            <Home />
            <Skills />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
