const _ = require('lodash');

const user = {
  firstName: 'Jan',
  lastName: 'Kowalski',
  grades: [
    { subject: 'math', grade: 4, weight: 2 },
    { subject: 'english', grade: 3, weight: 1 },
    { subject: 'history', grade: 5, weight: 1 }
  ]
};

function calculateWeightedAverage(user) {
  const totalWeight = _.sumBy(user.grades, 'weight');
  const weightedSum = _.sumBy(user.grades, (g) => g.grade * g.weight);
  const weightedAverage = weightedSum / totalWeight;
  
  console.log(`${user.firstName} ${user.lastName} - Średnia ważona: ${weightedAverage.toFixed(2)}`);
}

function findSubjectWithWeightOne(user) {
  const subjectWithWeightOne = _.find(user.grades, { weight: 1 });
  console.log("Przedmiot z wagą 1:", subjectWithWeightOne ? subjectWithWeightOne.subject : "Brak");
}

calculateWeightedAverage(user);
findSubjectWithWeightOne(user);
