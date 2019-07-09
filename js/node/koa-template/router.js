/**
 * 管理router
 * can't find module 'XXX'  npm i XXX
 */
const Router = require('koa-router');
const router = new Router();

const user = {
  name: 'eee',
  posts: [
    {
      id: 0,
      title: '小程序埋坑指南'
    },
    {
      id: 1,
      title: 'Vue.js真好'
    }
  ]
};
const postDetail = [
  {
    id: 0,
    content: 'wechat app'
  },
  {
    id: 1,
    content: '<strong>react 表示不服</strong>'
  }
]
router.get('/user', async (ctx) => {
  await ctx.render('user', { user }) 
})
router.get('/posts', async (ctx) => {
  const { id } = ctx.query;
  const post = postDetail.find(postItem => postItem.id == id);
  await ctx.render('post', { post });
})
// 浏览器地址栏 get
router.get('/create', async (ctx) => {
  await ctx.render('create');
})
// submit methods = 'post'
router.post('/create', async (ctx) => {
  console.log(ctx.request.body);
  const {title,content} = ctx.request.body;
  let id = Date.now();
  user.posts.push({
    id,
    title
  })
  postDetail.push({
    id,
    content
  })
  ctx.redirect('/user')
})

module.exports = router;