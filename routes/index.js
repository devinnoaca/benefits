const express = require('express');
const router = express.Router();
const home = require('../lib/home.js');
const template = require('../lib/template.js');

router.get('/', function (request, response) {
  var program_info = template.program_info(request.program_json);
  var partner_info = template.partner_info(request.partners_json);
  var modal = template.modal(request.partners_json);

  var html = home(`${program_info}`, `${partner_info}`, `${modal}`);
  response.send(html);
});

module.exports = router;
