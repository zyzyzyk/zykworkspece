const express = require('express');
const path = require('path');
const app = express();
const routes = require('./routers/index')
// const userRouter = require('./routers/users')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.use(function(req,res,next) {
//   console.log('1');
//   next();
// })

// app.use(function(req,res,next) {
//   console.log('2');
//   res.status(200).end();
//   // next();
// })

// app.use('/', indexRouter);
// app.use('/users', userRouter);
routes(app);

app.listen(3000);