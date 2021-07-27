import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./Components/NavBar.js"
import Home from "./Pages/Home"
import FAQs from "./Pages/FAQs"
import Projects from "./Pages/Projects"
import Contact from "./Pages/Contact"
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Switch>
             <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/projects">
              <Projects />
            </Route>
            <Route exact path="/faqs">
              <FAQs />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
