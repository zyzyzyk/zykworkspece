// 登录
const express = require('express');
const router = express.Router();

router.post('/', function(req, res, next) {
  res.send('登录');
})

module.exports = router