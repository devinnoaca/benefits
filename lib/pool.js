const fs = require('fs');

poolPartners = () =>{
  const partners = fs.readFileSync('data/partners.json');
  return JSON.parse(partners);
};

poolPrograms = () =>{
  const programs = fs.readFileSync('data/programs.json');
  return JSON.parse(programs);
};

module.exports = {
  poolPartners,
  poolPrograms,
};