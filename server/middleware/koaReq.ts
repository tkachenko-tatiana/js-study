import { IRouterContext } from 'koa-router';

function koaReq(innerFunc: (ctx: IRouterContext) => Promise<object>) {
  return (ctx: IRouterContext) => {
    // TODO: Add logger

    return innerFunc(ctx)
      .then((data) => {
        ctx.body = ({ success: true, data });
      });
  };
}

export default koaReq;
