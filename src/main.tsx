import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import ProductDetails from './ProductDetails';

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/product/:id" component={ProductDetails} />
      </Switch>
    </Router>
  );
};

export default Routes;