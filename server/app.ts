import Koa from 'koa';

import path from 'path';
import bodyParser from 'koa-bodyparser';
import router from './controllers';
import errorhandler from './middleware/errorhandler';
import managerFactory from './middleware/managerFactory';
import koaReq from './middleware/koaReq';
import serve from 'koa-static';
import mount from 'koa-mount';
import jwt from './middleware/jwt';

const app = new Koa();

app.use(mount('/api', jwt()));

// TODO Move to separate module
app.use(bodyParser({ enableTypes: ['json'] }));
app.use(managerFactory);
app.use(errorhandler);
app.use(mount('/api', koaReq));
app.use(mount('/api', router()));

if (process.env.NODE_ENV === 'production') {
  app.use(serve(path.resolve('..', 'client')));
}

export default app;
