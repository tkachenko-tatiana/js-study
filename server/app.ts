import Koa from 'koa';
import jwt from 'koa-jwt';
import bodyParser from 'koa-bodyparser';
import router from './controllers';
import errorhandler from './middleware/errorhandler';
import managerFactory from './middleware/managerFactory';
import koaReq from './middleware/koaReq';

const app = new Koa();

app.use(jwt({ secret: 'shared-secret' })
  .unless({
    path: [
      /\/api\/user\/login\/*/,
      /\/api\/user\/register\/*/,
      /\/api\/user\/activate\/*/,
      /\/api\/user\/forgotPassword\/*/,

      /\/api\/course\/*/
    ]
  }));

// TODO Move to separate module
app.use(bodyParser({ enableTypes: ['json'] }));
app.use(managerFactory);
app.use(errorhandler);
app.use(koaReq);
app.use(router());

export default app;
