const Koa = require('koa');
const app = new Koa()
const koaStatic = require('koa-static');
const path = require('path');
const router = require('koa-router')();

app.use(koaStatic(
  path.join(__dirname, './static/')
))
app.use(async (ctx,next) => {
  // 允许哪个域名访问资源
  ctx.set('Access-Control-Allow-Origin','http://localhost:8080');
  ctx.set('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  ctx.set('Access-Control-Allow-Headers', 'X-custom');
  // cookie
  // 是否允许携带cookie
  // 设为true
  // Access-Control-Allow-Origin 需要一个详细的 域名 而不是 *
  ctx.set('Access-Control-Allow-Credentials', true)
  await next();
})
router.get('/api/jsonp', async (ctx) => {
  // console.log(ctx.headers);
  const cb = ctx.request.query.callback;
  const person = {
    name: 'name1',
    age: 1
  }
  ctx.body = `${cb}(${JSON.stringify(person)})`;
})
app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(9999, () => {
  console.log('server is running 9999');
});
