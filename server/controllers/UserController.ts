import httpStatus from 'http-status';
import Router from 'koa-router';
import UserManager from '../managers/UserManager';

const router = new Router({ prefix: '/api/user' });

router
  .post('/login', async (ctx) => {
    const manager = ctx.createManager(UserManager);
    const { email, password } = ctx.body;
    return manager.login(email, password);
  })

  .post('/register', async (ctx) => {
    const manager = ctx.createManager(UserManager);
    return manager.register(ctx.body.email);
  })

  .post('/activate/:token', async (ctx) => {
    const manager = ctx.createManager(UserManager);
    return manager.activate(ctx.params.token, ctx.body);
  })

  .post('/forgotPassword', async (ctx) => {
    ctx.body = [];
  });

export default router;
