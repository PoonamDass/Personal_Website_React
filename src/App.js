import {useState} from "react"
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar.js"
import Home from "./Pages/Home"
import FAQs from "./Pages/FAQs"
import Projects from "./Pages/Projects"
import Contact from "./Pages/Contact"


function App() {
  const [darkMode, setDarkMode] = useState(false);
  
  const toggleDarkMode = () => setDarkMode(darkMode ? false : true);

  return (
    <div className="App" data-theme={darkMode ? "dark" : "light"}>
      <Router>
        <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
        <main className="main">
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
