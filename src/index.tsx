import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import { configureStore } from './store';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();
const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
  <Router history={history}>
    <Switch>
      <Route path="/" component={App} />
    </Switch>
  </Router>
</Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
