import Router from 'koa-router';
import UserManager from '../managers/UserManager';
import koaReq from '../middleware/koaReq';

const router = new Router({ prefix: '/api/user' });

router
  .post('/login', koaReq(async (ctx) => {
    const manager = ctx.createManager(UserManager);
    const { email, password } = ctx.body;
    return manager.login(email, password);
  }))

  .post('/register', koaReq(async (ctx) => {
    const manager = ctx.createManager(UserManager);
    await manager.register(ctx.body.email);
    return {};
  }))

  .put('/activate/:token', koaReq(async (ctx) => {
    const manager = ctx.createManager(UserManager);
    return manager.activate(ctx.params.token, ctx.body);
  }))

  .post('/forgotPassword', koaReq(async (ctx) => {
    return [];
  }));

export default router;
