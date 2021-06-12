import React from "react";
import Welcome from "./components/Welcome";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Play from "./components/Play";
import Question from "./components/Question";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  !data ? console.log("Loading...") : console.log(data);
  return (<Router>
    <Switch>
      <Route path="/" exact component={() => <Welcome />} />
      <Route path="/play" exact component={() => <Play />} />
      <Route path="/question" component={() => <Question />} />
    </Switch>
  </Router>)
}

export default App;