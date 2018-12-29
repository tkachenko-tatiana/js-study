import Koa from 'koa';
import router from './controllers';
import errorhandler from './middleware/errorhandler';
import jwt from 'koa-jwt';

const app = new Koa();

app.use(jwt({ secret: 'shared-secret' })
  .unless({
    path: [/\/api\/users\/auth\/*/, /\/api\/users\/register\/*/, /\/api\/users\/activation\/*/]
  }));

app.use(errorhandler);
app.use(router());

app.listen(process.env.PORT || 3100);
console.log(`Server started on http://localhost:${process.env.PORT || 3100}`);
