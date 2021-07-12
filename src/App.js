import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Project from "./components/Project.js";
import ProjectDetail from "./components/ProjectDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Project">
            <Project />
          </Route>
          <Route path="/Detail/id">
            <ProjectDetail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
