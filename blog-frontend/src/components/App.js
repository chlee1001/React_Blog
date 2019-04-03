import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  ListPage,
  PostPage,
  EditorPage,
  NotFoundPage,
  AboutPage
} from '../pages';
// import test from './testVelog/list/test2';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Switch>
            <Route exact path="/" component={ListPage} />
            <Route path="/test" component={ListPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/page/:page" component={ListPage} />
            <Route path="/tag/:tag/:page?" component={ListPage} />
            <Route path="/@:username/:urlSlug" component={PostPage} />
            <Route path="/post/:id" component={PostPage} />
            <Route path="/editor" component={EditorPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}
