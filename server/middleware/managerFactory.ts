import { Context } from 'koa';
import managerFactory from '../managers';
import { IUserSession } from '../../sdk/models/User';

export interface IManagerContext extends Context {
  createManager: ReturnType<typeof managerFactory>;
}

export default async (ctx: IManagerContext, next: () => Promise<void>) => {
  ctx.createManager = managerFactory(ctx.state.user as IUserSession);
  await next();
};
