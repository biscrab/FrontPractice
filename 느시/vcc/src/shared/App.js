import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import * as P from '../pages'

class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={P.Home}></Route>
                </Switch>
            </div>
        );
    }
}

export default App;