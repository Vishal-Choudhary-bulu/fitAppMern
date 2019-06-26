import React from 'react'
import { BrowserRouter as Router, Route} from  'react-router-dom'
import './App.css'
import Navbar from './components/Navbar';
import Exercises from './components/Exercises';
import Users from './components/Users';
import Workout from './components/Workout';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar/>
        <Route exact path="/" component = {Exercises} />
        <Route exact path="/users" component = {Users} />
        <Route exact path="/workout" component = {Workout} />
      </div>
    </Router>
  );
}

export default App;
