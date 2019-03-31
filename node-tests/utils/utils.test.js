const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
  var res = utils.add(33, 11);
  
  expect(res).toBe(44).toBeA('number');
});

it('should square a number', () => {
  var res = utils.square(4);

  expect(res).toBe(16).toBeA('number');
});

it('should verify first and last names are set', () => {
  var user = {location: 'Brazil', age: 24};
  var res = utils.setName(user, 'Pedro Alves');

  expect(user).toEqual(res);
  expect(res).toInclude({
    firstName: 'Pedro',
    lastName: 'Alves'
  });
});

// it('should expect some values', () => {
//   // expect(12).toNotBe(11);
//   // expect({name: 'pedro'}).toNotEqual({name: 'Pedro'});
//   // expect([2,3,4]).toExclude(1);
//   expect({
//     name: 'Pedro',
//     age: 24,
//     location: 'Brazil'
//   }).toExclude({
//     age: 23
//   })
// });
