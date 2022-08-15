import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';

import Test from './components/quiz/test';
import Play from './components/quiz/Play';
import QuizSummary from './components/quiz/test1';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Home}/>
        <Route path="/play/instructions" exact component={Test} />
        <Route path="/play/quiz" exact component={Play}/>
        <Route path="/play/quizSummary" exact component={QuizSummary}/>
      </Router>
    </div>
  );
}

export default App;
