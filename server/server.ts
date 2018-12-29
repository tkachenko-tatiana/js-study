import Koa from 'koa';
import jwt from 'koa-jwt';
import bodyParser from 'koa-bodyparser';
import router from './controllers';
import errorhandler from './middleware/errorhandler';
import managerFactory from './middleware/managerFactory';

const app = new Koa();

// app.use(jwt({ secret: 'shared-secret' })
//   .unless({
//     path: [/\/api\/users\/auth\/*/, /\/api\/users\/register\/*/, /\/api\/users\/activation\/*/]
//   }));

// TODO Move to separate module
app.use(bodyParser());
app.use(async (ctx, next) => {
  ctx.body = ctx.request.body;
  await next();
});
app.use(managerFactory);
app.use(errorhandler);
app.use(router());

app.listen(process.env.PORT || 3100);
console.log(`Server started on http://localhost:${process.env.PORT || 3100}`);
