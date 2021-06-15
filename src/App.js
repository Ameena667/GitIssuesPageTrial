import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import TypeCheckingPractice from "./components/TypeCheckingPractice";
import GithubIssues from "./components/GithubIssues";
import IssueDisplay from "./components/issueDisplay";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact strict component={GithubIssues} />
          <Route path="/issues/:id" exact strict component={IssueDisplay} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
