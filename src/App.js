import { Switch, Route } from "react-router-dom";

//Components
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import NavBar from "./components/NavBar";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <NavBar />

      <Switch>
        <Route path="/">
          <Home />
          <Skills />
          <Projects />
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
