const Koa = require('koa');
//支持哪些模板引擎
const views = require('koa-views');
const ejs = require('ejs');
const path = require('path');
// 处理请求数据
const koaBody = require('koa-body');
const Router = require('koa-router');
// const router = new Router();
const app = new Koa();
const router = require('./router')
app.use(koaBody());

// const user = {
//   name: 'eee',
//   posts: [
//     {
//       id: 0,
//       title: '小程序埋坑指南'
//     },
//     {
//       id: 1,
//       title: 'Vue.js真好'
//     }
//   ]
// }
// const postDetail = [
//   {
//     id: 0,
//     content: 'wechat app'
//   },
//   {
//     id: 1,
//     content: '<strong>react 表示不服</strong>'
//   }
// ]
app.use(
  views(path.join(__dirname, './views'),{
    extension: 'ejs'
  })
)



//  /user 个人主页面
//  /posts 文章详情

// rourouter.get('/user', );ter.get('/posts', )
// app.use(async (ctx) => {
// // 区分 页面
//   // console.log(ctx.path);
//   if(ctx.path === '/user') {
//     await ctx.render('user', { user });
//   }else if(ctx.path === '/posts') {
//     const { id } = ctx.query;
//     const post = postDetail.find(postItem => postItem.id == id);
//     await ctx.render('post', { post });
//   }else{
//     ctx.body = '无法访问';
//   }
// });
app.use(router.routes())
   .use(router.allowedMethods());

app.listen(8080, () => {
  console.log('server is running 8080');
})