import React from 'react';
import { Link, Route } from 'react-router-dom';
import Transition from 'react-transition-group/Transition';

import './App.css';

import Home from './Home';
import Subpage from './Subpage';

const App = () =>
  (<div className="App">
    <div className="App-header">
      <h1>Welcome to React Transition Group</h1>
      <Link to="/home">Home</Link>
      <Link to="/subpage">Subpage</Link>
    </div>
    <Route
      path="/home"
      exact
      children={({ match, ...rest }) => {
        console.log('match:', match);
        return (
          <Transition in={!!match} timeout={1000}>
            {(status) => {
              console.log('Status:', status);
              return <Home {...rest} status={status} />;
            }}
          </Transition>
        );
      }}
    />
    <Route path="/subpage" component={Subpage} />
  </div>);

export default App;
