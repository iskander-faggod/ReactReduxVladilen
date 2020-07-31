import React from 'react';
import Layout from './hoc/Layout/Layout.js';
import Quiz from './containers/Quiz/Quiz.js';
import {Route,Switch} from 'react-router-dom';
import QuizCreator from './containers/QuizCreator/QuizCreator';
import Auth from './containers/Auth/Auth';
import QuizList from './containers/QuizList/QuizList'
function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path='/auth' component={Quiz}/>
          <Route path='/quiz-creator' component={Quiz}/>
          <Route path='/quiz/:id' component={Quiz}/>
          <Route path='/' component={Quiz}/>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;

