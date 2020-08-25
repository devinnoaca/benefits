const express = require('express');
const router = express.Router();
const { pool, poolPartners, poolPrograms } = require('../lib/pool');
const mainTemplate = require('../templates/home');
const subTemplate = require('../templates/template');

/* GET home page. */
router.get('/', function(req, res, next) {
  const partnerInfo = poolPartners();
  const programInfo = poolPrograms();
  const realProgram = subTemplate.program_info(programInfo);
  const realPartner = subTemplate.partner_info(partnerInfo);

  const modal = subTemplate.modal(partnerInfo);
  const html = mainTemplate(`${realProgram}`, `${realPartner}`, `${modal}`);
  res.send(html);

  // res.render('index', {partner_info: test});

});

module.exports = router;
