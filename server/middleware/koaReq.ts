import { IRouterContext } from 'koa-router';

async function koaReq(ctx: IRouterContext, next: () => Promise<any>) {
  await next();
  const data = ctx.body;

  // TODO Add logger

  ctx.body = ({ success: true, data });
}

export default koaReq;
