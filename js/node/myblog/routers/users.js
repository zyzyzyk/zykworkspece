const express = require('express');
const router = express.Router();

router.get('/:name', function(req,res) {
  res.render('users', {
    name: req.params.name,
    supplies: ['商务', '下了呀', '我来吧']
  });
})

module.exports = router;