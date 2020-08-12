const express = require('express'); // module 읽어오기
const fs = require('fs');
const app = express();
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.get('*', function(request, response, next){
  fs.readFile('./data/program.json', 'utf8', (error, jsonFile) => {
    if (error) return console.log(error);
    const jsonData = JSON.parse(jsonFile);
    request.program_json = jsonData;
    next();
  });
})
app.get('*', function(request, response, next){
  fs.readFile('./data/partners.json', 'utf8', (error, jsonFile) => {
    if (error) return console.log(error);
    const jsonData = JSON.parse(jsonFile);
    request.partners_json = jsonData;
    next();
  });
})

app.use('/', indexRouter);

app.use(function(req, res, next){
  res.status(404).send('Sorry can\'t find that!');
})

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
})

app.listen(3001, () => console.log('Example app listening on port 3001!'));
