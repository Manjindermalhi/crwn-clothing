import React from 'react';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Homepage} from "./pages/homepage/homepage.component";
import './App.css';
import ShopPage from "./pages/shop/shop.component.jsx";


function App() {
  return (
    <div>
    <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
    </Switch>
    </div>
  );
}

export default App;
