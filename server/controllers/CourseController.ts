import Router from 'koa-router';
import CourseManager from '../managers/CourseManager';

const router = new Router({ prefix: '/api/course' });

router
  .get('/', async (ctx) => {
    const manager = ctx.createManager(CourseManager);
    ctx.body = await manager.findAll();
  })

  .post('/', async (ctx) => {
    const manager = ctx.createManager(CourseManager);
    await manager.create(ctx.request.body);
    ctx.body = {};
  });

export default router;
