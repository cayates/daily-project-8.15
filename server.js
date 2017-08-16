const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();
const robotsData = require('./data');
const robotInfo = robotsData.users;
const robotDal = require('./dal')


app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.use(express.static('public'));

app.get('/robots', function (request, response) {
    const robots = robotDal.getRobots()
    response.render('robots', { robots: robots })
  })

  app.get('/_robot/:id', function (request, response) {
    const chosenRobot = robotDal.getRobot(request.params.id)
    if (chosenRobot) {
      response.render('robotDetail', chosenRobot)
    } else {
      response.send('NO ROBOTS!!!')
    }
    console.log(chosenRobot);
  })

app.set('port', 3000);

app.listen(3000, function(){
    console.log('Express started successfully.');
})

console.log(robotsData.users);

// app.get('/kittehs/:id', function (request, response) {
//   const chosenKitty = kittyDal.getKitty(request.params.id)
//   if (chosenKitty.id) {
//     response.render('kittyDetail', chosenKitty)
//   } else {
//     response.send('NO KITTEHS!!!')
//   }
// })
