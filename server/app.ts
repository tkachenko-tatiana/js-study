import Koa from 'koa';
import fs from 'fs';
import path from 'path';
import bodyParser from 'koa-bodyparser';
import router from './controllers';
import errorhandler from './middleware/errorhandler';
import managerFactory from './middleware/managerFactory';
import koaReq from './middleware/koaReq';
import serve from 'koa-static';
import mount from 'koa-mount';
import jwt from './middleware/jwt';
import Router from 'koa-router';

const app = new Koa();

app.use(mount('/api', jwt()));

// TODO Move to separate module
app.use(bodyParser({ enableTypes: ['json'] }));
app.use(managerFactory);
app.use(errorhandler);
app.use(mount('/api', koaReq));
app.use(mount('/api', router()));

// const staticFolder = process.env.NODE_ENV === 'production'
//   ? path.resolve('..', 'client')
//   : path.resolve('..', 'build', 'client');

const staticFolder = path.resolve('..', 'client');

const root = new Router();
root.get('*', async (ctx) => {
  ctx.type = 'html';
  ctx.body = fs.createReadStream(`${staticFolder}/index.html`);
});

app.use(serve(staticFolder));
app.use(root.routes());
app.use(root.allowedMethods());

export default app;
