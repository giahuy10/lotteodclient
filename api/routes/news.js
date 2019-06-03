var express = require('express');
var router = express.Router();

router
  // Get all News
  .get('/', (req, res) => {
   res.send('ok')
  })



module.exports = router;
