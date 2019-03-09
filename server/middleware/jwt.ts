import jwt from 'koa-jwt';

export default () => jwt({ secret: 'shared-secret' })
.unless({
  path: [
    /\/api\/user\/login\/*/,
    /\/api\/user\/register\/*/,
    /\/api\/user\/activate\/*/,
    /\/api\/user\/forgotPassword\/*/,

    /\/api\/course\/*/
  ]
});
