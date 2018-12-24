import { Context } from 'koa';
import { HttpError } from '../lib/errors';

function handleError(err: Error, ctx: Context) {
  if (err instanceof HttpError) {
    ctx.status = err.httpStatus;

    if (!ctx.accepts('json')) {
      ctx.body = `<h2> ${err.message} </h2>`;
    }

    ctx.body = {
      message: err.message,
      payload: err.payload,
      stacktrace: err.stack,
    };

    return;
  }

  ctx.throw(err);
}

export default async (ctx: Context, next: () => Promise<void>) => {
  try {
    await next();
  } catch (e) {
    handleError(e, ctx);
  }
};
