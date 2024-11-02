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

const collections = [
    {},
    15,
    "hello@test.pl",
    null,
    ['aaa', 'bbb', 5],
    'admin@gmail.com',
    undefined,
    'a34@yahoo.com',
    '321@a',
    '321.pl'
  ];
  
  function getMails(collections) {
    const emailPattern = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
    const emails = _.filter(collections, (item) => typeof item === 'string' && emailPattern.test(item));
    console.log("Posortowane maile:", emails.sort());
  }
  
  getMails(collections);
  
