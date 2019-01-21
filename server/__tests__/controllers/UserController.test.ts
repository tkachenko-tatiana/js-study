import expect from 'expect';
import 'mocha';
import supertest, { SuperTest } from 'supertest';

describe('User Controller', () => {
  let request: SuperTest<supertest.Test>;

  before(() => {
    request = supertest.agent(global.server);
  });

  it('test', () => {
    return request
      .post('/api/user/register')
      .send({ email: 'mocha_test@test.com' })
      .expect(200);
  });
});
