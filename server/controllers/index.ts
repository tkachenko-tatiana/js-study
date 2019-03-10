import combineRouters from 'koa-combine-routers';
import requireAll from 'require-all';

const controllers = requireAll({
  dirname: __dirname,
  filter: /(.+Controller)\.(j|t)s$/,
  resolve: (module: any) => module.default,
});

export default combineRouters(Object.values(controllers));
