import httpStatus from 'http-status';
import Router from 'koa-router';
import { HttpError } from '../lib/errors';

const router = new Router({ prefix: '/test' });

router
  .get('/', async (ctx) => {
    throw new HttpError(httpStatus.FORBIDDEN, 'test');
    ctx.body = 'test';
  })

  .get('/test', async (ctx) => {
    ctx.body = { text: 'super-test' };
  });

export default router;
