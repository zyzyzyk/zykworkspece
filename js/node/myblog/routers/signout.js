// 退出
const express = require('express');
const router = express.Router();

router.post('/', function(req, res, next) {
  res.send('退出');
})

module.exports = router