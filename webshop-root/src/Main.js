import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './Homepage';
import Product from './Product';
// import Category from './Category';

let Main = () =>
    <div>
        <Switch>
            <Route path="/" component={Homepage} />
            <Route path="/product" component={Product} />
            <Route path="/#/product/:product" component={Product} />
        </Switch>
  </div>;

  export default Main