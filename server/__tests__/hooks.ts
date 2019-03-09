import connect from '../db/connect';
import { IGlobal } from './models';

declare const global: IGlobal;

let connection: any;

before(async () => {
  console.log('===== BEFORE =====');
  connection = await connect();
  global.db = require('../db').default;
  global.server = require('../server').default;
});

after(async () => {
  console.log('===== AFTER =====');
  await connection.close();
  await global.server.close();
});
