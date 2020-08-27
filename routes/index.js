const express = require('express');
const router = express.Router();
const { pool } = require('../lib/pool');

const mainTemplate = require('../templates/home');
const programTemplate = require('../templates/programGrid');
const partnerTemplate = require('../templates/partnerGrid');
const modalTemplate = require('../templates/modal');


/* GET home page. */
router.get('/', function(req, res, next) {
  const programData = poolPrograms();
  const partnerData = poolPartners();

  const realProgram = programTemplate(programData);
  const realPartner = partnerTemplate(partnerData);
  const modal = modalTemplate(partnerData);
  
  const html = mainTemplate(`${realProgram}`, `${realPartner}`, `${modal}`);
  res.send(html);
});

module.exports = router;
