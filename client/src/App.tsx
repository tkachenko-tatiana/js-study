import * as React from 'react';
import { default as MobxReactDevtools } from 'mobx-react-devtools';
import { Route } from 'react-router';
import { Switch } from 'react-router-dom';
import Layout from './layout';
import Registration from './routes/Registration';
import Login from './routes/Login';
import Routes from './routes/Routes';
import Main from './routes/Main';
import Activation from './routes/Activation';

const App = () => (
  <React.Fragment>
    {/* <MobxReactDevtools /> */}
    <Layout>
      <Switch>
        <Route path={Routes.Main} component={Main} exact />
        <Route path={Routes.Registration} title="Registration" component={Registration}/>
        <Route path={Routes.Login} title="Login" component={Login}/>
        <Route path={Routes.Activation(':token')} component={Activation}/>
      </Switch>
    </Layout>
  </React.Fragment>
);

export default App;
