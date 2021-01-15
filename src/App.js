import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
// Routes
import Viewer from './Component/Viewer.js';

function ExampleEntry({ title, url, text }) {
  return (
      <div>
        <h5>
          <Link to={url}>{title}</Link>
        </h5>
        <p>{text}</p>
        <hr />
      </div>
  );
}

function Index() {
  const style = {
    minHeight: '512px',
  };

  const examples = [
    {
      title: 'Open Viewer',
      url: '/grid',
      text: 'multiple viewers',
    }
  ];

  const exampleComponents = examples.map(e => {
    return <ExampleEntry key={e.title} {...e} />;
  });

  return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-lg-12" style={style}>
            <h1>Cloud App PACS</h1>
            {exampleComponents}
          </div>
        </div>
      </div>
  );
}

function Login(props) {
  return (
      <div className="container">
        <h5>
          <Link to="/">Back to Login</Link>
        </h5>
        {props.children}
      </div>
  );
}

function AppRouter() {
  const grid = () => Login({ children: <Viewer /> });
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/grid/" render={grid} />

          <Route exact component={Index} />
        </Switch>
      </Router>
  );
}

export default class App extends Component {
  render() {
    return <AppRouter />;
  }
}
