const fs = require('fs');

let characters = [];

let data_csv = fs.readFileSync('build/data/coveragedata.csv', 'utf8');

let coverage = data_csv.split("\n");
let cleandata = [];

coverage.forEach(function(coverage) {
  let character_info = coverage.split(',');
  let character = {};
  character['location'] = character_info[0];
  character['employer'] = character_info[1];
  character['nongroup'] = character_info[2];
  character['medicaid'] = character_info[3];
  character['medicare'] = character_info[4];
  character['military'] = character_info[5];
  character['uninsured'] = character_info[6];
  characters.push(character);

});

  fs.writeFileSync('data/coverage.json', JSON.stringify(characters), 'utf8');