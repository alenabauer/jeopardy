import React, { useEffect, useState } from "react";
import Welcome from "./components/Welcome";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Play from "./components/Play";
import Question from "./components/Question";
import FinalQuestion from "./components/FinalQuestion";
import Final from "./components/Final";
import ThankYou from "./components/ThankYou";
import axios from 'axios';

function App() {

  // fetch data from the /api/questions route
  const useFetch = (url) => {
    const [data, setData] = useState([]);
    useEffect(() => {
      const fetchData = async function () {
        try {
          const response = await axios.get(url);
          if (response.status === 200) {
            setData(response.data);
          }
        } catch (error) {
          throw error;
        } finally {
        }
      };
      fetchData();
    }, [url]);
    return data;
  };
  const data = useFetch(
    "/api/questions"
  );

  // fetch the question content corresponding to the opened question
  function getQuestion(questionID) {
    if (data === null || data === []) {
       return ("Can't connect to the server")}
    else {return data[questionID]["question"]};
  }
  // fetch the answer content corresponding to the opened question
  function getAnswer(questionID) {
    if (data === null || data === []) {
      return ("Can't connect to the server")}
    else {return data[questionID]["answer"]};
  }
  
  // fetch image URL for the questions with images
  function getImgSrc(questionID) {
    return data[questionID]["questionImg"];
  }
  
  return (<Router>
    <Switch>
      <Route path="/" exact component={() => <Welcome />} />
      <Route path="/play" exact component={() => <Play />} />
      <Route path="/question/:id" component={() => <Question question={getQuestion} answer={getAnswer} img={getImgSrc} />} />
      <Route path="/final" exact component={() => <Final />} />
      <Route path="/final/question" component={() => <FinalQuestion question={getQuestion} answer={getAnswer} img={getImgSrc} />} />
      <Route path="/thankyou" exact component={() => <ThankYou />} />
    </Switch>
  </Router>)
}

export default App;
