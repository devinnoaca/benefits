const fs = require('fs');

poolPartners = () =>{
  const partners = fs.readFileSync('data/partners.json');
  return JSON.parse(partners);
};

poolPrograms = () =>{
  const programs = fs.readFileSync('data/programs.json');
  return JSON.parse(programs);
};

poolPrivacyPolicy = () =>{
  const privacyPolicy = fs.readFileSync('data/privacy_policy.txt', 'utf-8');
  return privacyPolicy;
}

module.exports = {
  poolPartners,
  poolPrograms,
  poolPrivacyPolicy,
};