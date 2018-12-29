// import { NextFunction, Request, Response } from "express";
// import managerFactory from "portal-bl";

// export interface IManagersRequest extends Request {
//   createManager: ReturnType<typeof managerFactory>;
// }

// export default (req: IManagersRequest, res: Response, next: NextFunction) => {
//   req.createManager = managerFactory(req.user);
//   next();
// };

import { Context } from 'koa';
import managerFactory from '../managers';
import { IUserSession } from '../../sdk/models/User';

export default async (ctx: Context, next: () => Promise<void>) => {
  ctx.createManager = managerFactory(ctx.state.user as IUserSession);
  await next();
};
