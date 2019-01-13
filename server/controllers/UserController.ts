import Router from 'koa-router';
import UserManager from '../managers/UserManager';

const router = new Router({ prefix: '/api/user' });

router
  .post('/login', async (ctx) => {
    const manager = ctx.createManager(UserManager);
    const { email, password } = ctx.request.body;
    ctx.body = await manager.login(email, password);
  })

  .post('/register', async (ctx) => {
    const manager = ctx.createManager(UserManager);
    await manager.register(ctx.request.body.email);
    ctx.body = {};
  })

  .get('/activate/:token', async (ctx) => {
    const manager = ctx.createManager(UserManager);
    ctx.body = await manager.getUserByToken(ctx.params.token);
  })

  .put('/activate/:token', async (ctx) => {
    const manager = ctx.createManager(UserManager);
    ctx.body = await manager.activate(ctx.params.token, ctx.request.body);
  })

  .post('/forgotPassword', async (ctx) => {
    ctx.body = [];
  });

export default router;
