import { Request, Context } from 'koa'; 
import managerFactory from "./managers"

declare module 'koa' { 
  interface Request { 
    body: any;
  }

  interface Context {
    createManager: ReturnType<typeof managerFactory>
  }
}