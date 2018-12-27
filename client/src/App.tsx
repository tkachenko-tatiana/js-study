import * as React from 'react';
import { default as MobxReactDevtools } from 'mobx-react-devtools';
import { Route } from 'react-router';
import { Switch } from 'react-router-dom';
import Layout from './layout';
import Registration from './routes/Registration';
import Login from './routes/Login';
import { TodoListWithStore } from './MobXExample';
import Routes from './routes/Routes';

const App = () => (
  <React.Fragment>
    <MobxReactDevtools />
    <Layout>
      <Switch>
        <Route path={Routes.Main} component={TodoListWithStore} exact />
        <Route path={Routes.Registration} title="Registration" component={Registration}/>
        <Route path={Routes.Login} title="Login" component={Login}/>
      </Switch>
    </Layout>
  </React.Fragment>
);

export default App;
