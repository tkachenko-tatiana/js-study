import { Request, Context } from 'koa'; 
import managerFactory from "./managers"

declare module 'koa' { 
  interface Context {
    createManager: ReturnType<typeof managerFactory>
  }

  interface Request { 
    body: any;
  }
}

declare module NodeJS {
  interface Global {
    db: any;
    app: any;
  }
}
