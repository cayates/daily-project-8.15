const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();
const robotDal = require('./dal')
const robotData =[];

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');
app.use(express.static('public'));

app.get('/', function (req, res){
    res.redirect('./robots')
})

app.get('/robots', function(req, res) {
    const robots = robotDal.getRobots()    
    res.render('robots')
})

app.get('/robotDetail', function (req, res){
    res.render('robotDetail')
})

app.get('/_robot/:id', function (req, res) {
    const chosenRobot = robotDal.getRobot(req.params.id)
    if (chosenRobot) {
      res.render('robotDetail', chosenRobot)
    } else {
      res.send('NO ROBOTS!!!')
    }
    console.log(chosenRobot);
  })

app.set('port', 3000);

app.listen(3000, function(){
    console.log('Express started successfully, bro.');
})