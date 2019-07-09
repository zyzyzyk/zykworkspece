// 主页
const express = require('express');
const router = express.Router();

router.post('/', function(req, res, next) {
  res.send('主页');
})

module.exports = router