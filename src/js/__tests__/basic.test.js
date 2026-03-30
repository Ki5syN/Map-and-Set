import sum from '../basic';

import Team from '../Team';

import ErrorRepository from '../ErrorRepository';

test('should sum', () => {
  const result = sum([1, 2, 3]);

  expect(result).toBe(6);
});

test('test add double characters ', () => {
  const bestTeam  = new Team;
  bestTeam.add('warrior')
  expect(() => bestTeam.add('warrior')).toThrow('Этот персоонаж уже был выбран') 
})

test('test add a new character', () => {
  const bestTeam  = new Team;
  bestTeam.add('warrior')
  expect(bestTeam.members.has('warrior')).toBe(true)

})


test('test add an array of  unique heroes', () => {
  const bestTeam  = new Team;
  const characters = ['Superman',
                      'Batman',
                      'Spider-Man',
                      'Superman',
                      'Shreck',
                      'Green Lantern'] 
  bestTeam.addAll(...characters)
  expect(bestTeam.members.size).toBe(5)
})

test('test is set Array ',()=> {
  const bestTeam  = new Team;
  const characters = ['Superman',
                      'Batman',
                      'Spider-Man',
                      ' Shreck',
                      'Green Lantern'] 
  bestTeam.addAll(...characters)
  const arr = bestTeam.toArray();
  expect(Array.isArray(arr)).toBe(true)
})

test ('test create & translate  errorInformation', () => {
  const error = new ErrorRepository;
  error.addError('404','page not found')
  expect(error.translate('404')).toBe('page not found')
})

test ('test check translate', () => {
  const error = new ErrorRepository;
  error.addError('404','page not found')
  expect(error.translate('403')).toBe('Unknown error')
})

