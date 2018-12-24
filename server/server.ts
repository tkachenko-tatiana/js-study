import Koa from 'koa';
import router from './controllers';
import errorhandler from './middleware/errorhandler';

const app = new Koa();

app.use(errorhandler);
app.use(router());

app.listen(process.env.PORT || 3100);
console.log(`Server started on http://localhost:${process.env.PORT || 3100}`);
