const robotsData = require('./data');
const robotInfo = robotsData.users;

function getRobots () {
  return robotInfo
}

function getRobot (robotId) {
    let chosenRobot = {}
    for (let i = 0; i < robotInfo.length; i++) {
      if (robotInfo[i].id = robotId) {
        chosenRobot = robotInfo[i]
      }
      console.log(chosenRobot);
    }
    return chosenRobot
  }

module.exports = {
    getRobot: getRobot,
    getRobots: getRobots
  }

