var person = {
  firstName: 'Cody',
  lastName: 'Campbell',
  hobby: 'paintball',
  job: 'construction',
  previousJob: 'sales executive'
};
console.log(person);
var fullName = person.firstName + ' ' + person.lastName;
var job = person.job;
var previousJob = person.previousJob;
console.log('The persons name is:', fullName);
console.log('The persons current job is:', job);
console.log('The persons previous job is:', previousJob);
console.log('The complete person object:', person);
var myCar = {
  make: 'Lexus',
  model: 'ct200h',
  year: 2014,
  owner: person['firstName'] + ' ' + person['lastName']
};
console.log('Car information', myCar);
var bigString = 'My name is ' + myCar['owner'] + 'and i drive a ' + myCar['year'] + ' ' + myCar['make'] + ' ' + myCar['model'];
console.log(bigString);
console.log('My full car info:', myCar);
