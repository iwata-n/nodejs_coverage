var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  if (req.query.param) {    
    res.send(req.query.param);
    return;
  }
  res.send('no param');
});

module.exports = router;
