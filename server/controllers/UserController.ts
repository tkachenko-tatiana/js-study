import httpStatus from 'http-status';
import Router from 'koa-router';
import { HttpError } from '../lib/errors';

const router = new Router({ prefix: '/api/user' });

router
  .post('/login', async (ctx) => {
    ctx.body = [];
  })

  .post('/register', async (ctx) => {
    ctx.body = [];
  })

  .post('/activate', async (ctx) => {
    ctx.body = [];
  })

  .post('/forgotPassword', async (ctx) => {
    ctx.body = [];
  });

export default router;
