import React from 'react';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Homepage} from "./pages/homepage/homepage.component";
import './App.css';

const HatsPage = () => (<div>
<Link to="/">Home</Link>
  <h1>Hats Page</h1>
</div>);

function App() {
  return (
    <div>
    <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop/hats" component={HatsPage} />
    </Switch>
    </div>
  );
}

export default App;
