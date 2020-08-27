const express = require('express');
const router = express.Router();
const { pool } = require('../lib/pool');

const mainTemplate = require('../templates/home');
const programTemplate = require('../templates/programGrid');
const partnerTemplate = require('../templates/partnerGrid');
const modalTemplate = require('../templates/modal');

const navigation = require('../section/navigation');
const masthead = require('../section/masthead');
const program = require('../section/program');
const partner = require('../section/partner');

/* GET home page. */
router.get('/', function(req, res, next) {
  const programData = poolPrograms();
  const partnerData = poolPartners();
  const privacyPolicyData = poolPrivacyPolicy();

  const realProgram = programTemplate(programData);
  const realPartner = partnerTemplate(partnerData);
  const modal = modalTemplate(partnerData);
  
  const html = mainTemplate(
    `${navigation()}`,
    `${masthead()}`,
    `${program(realProgram)}`,
    `${partner(realPartner)}`, 
    `${modal}`, 
    `${privacyPolicyData}`
  );
  res.send(html);
});

module.exports = router;
