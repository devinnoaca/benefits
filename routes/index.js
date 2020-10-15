const express = require('express');
const router = express.Router();
const { pool } = require('../lib/pool');

const mainTemplate = require('../templates/home');
const programTemplate = require('../templates/programGrid');
const partnerTemplate = require('../templates/partnerGrid');
const modalTemplate = require('../templates/modal');

const navigation = require('../section/navigation');
const masthead = require('../section/masthead');
const animation = require('../section/animation');
const program = require('../section/program');
const partner = require('../section/partner');
const howToUse = require('../section/howToUse');
const contact = require('../section/contact');
const footer = require('../section/footer');

/* GET home page. */
router.get('/', function(req, res, next) {
  const programData = poolPrograms();
  const partnerData = poolPartners();
  const privacyPolicyData = poolPrivacyPolicy();

  const realProgram = programTemplate(programData);
  const realPartner = partnerTemplate(partnerData);
  const modal = modalTemplate(partnerData);
  
  const html = mainTemplate(
      `${animation()}`,
    `${navigation()}`,
    `${masthead()}`,
    `${program(realProgram)}`,
    `${partner(realPartner)}`, 
    `${howToUse()}`, 
    `${contact()}`, 
    `${footer('본 방침은 2020년 09월 01일부터 시행됩니다.', privacyPolicyData)}`,
    `${modal}`, 
    `${privacyPolicyData}`
  );
  res.send(html);
});

module.exports = router;
