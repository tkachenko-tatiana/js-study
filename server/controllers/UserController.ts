import Router from 'koa-router';
import UserManager from '../managers/UserManager';
import koaReq from '../middleware/koaReq';
import Koa from 'koa';

const router = new Router({ prefix: '/api/user' });

router
  .post('/login', async (ctx) => {
    const manager = ctx.createManager(UserManager);
    const { email, password } = ctx.request.body;
    ctx.body = manager.login(email, password);
  })

  .post('/register', async (ctx) => {
    const manager = ctx.createManager(UserManager);
    await manager.register(ctx.request.body.email);
    ctx.body = {};
  })

  .get('/activate/:token', async (ctx) => {
    const manager = ctx.createManager(UserManager);
    ctx.body = manager.getUserByToken(ctx.params.token);
  })

  .put('/activate/:token', async (ctx) => {
    const manager = ctx.createManager(UserManager);
    ctx.body = manager.activate(ctx.params.token, ctx.request.body);
  })

  .post('/forgotPassword', async (ctx) => {
    ctx.body = [];
  });

export default router;
