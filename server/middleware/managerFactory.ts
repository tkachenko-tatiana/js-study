import { Context } from 'koa';
import managerFactory from '../managers';
import { IUserSession } from '../../sdk/models/User';

export default async (ctx: Context, next: () => Promise<void>) => {
  ctx.createManager = managerFactory(ctx.state.user as IUserSession);
  await next();
};
