const functions = require('./functions');
// before each runs before every test before all runs before all tests
//beforeEach(()=>initDatabase());
//afterEach(()=>closeDatabase());

beforeAll(() => initDatabase());
afterAll(() => closeDatabase());

// lifeCycle methods
const initDatabase = () => console.log('Database Initialized...');
const closeDatabase = () => console.log('Database closed...');
const nameCheck = () => console.log('Checking Name...');
describe('checking Name', () => {
  beforeEach(() => nameCheck());
  test('User is Teja', () => {
    const user = 'Teja';
    expect(user).toBe('Teja');
  });
});

test('Adds 2+2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
  // expect is used to test condition based on matcher toBe
});

test('Adds 2+2 Not to equal 5', () => {
  expect(functions.add(2, 2)).not.toBe(5);
  // expect is used to test condition based on matcher toBe and not condition
});
// tobe null
test('should be null', () => {
  expect(functions.isNull()).toBeNull();
  // expect is used to test condition based on matcher toBe
});
// to be falsy
test('Should be Falsy value', () => {
  expect(functions.checkValue(null)).toBeFalsy();
  // expect is used to test condition based on matcher toBe
});

test('user should be teajswini nallapaneni object', () => {
  //expect(functions.createUser()).toBe({
  expect(functions.createUser()).toEqual({
    firstname: 'Tejaswini',
    lastname: 'Nallapaneni',
    // here test case fails because object uses reference and tobe will not work here
  });
});

// less than and greater than

test('should be under 1600', () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThanOrEqual(1600);
});

//Regex
test('There is no I in Team', () => {
  expect('team').not.toMatch(/I/i);
});

// Arrays
test('Admin should be in usernames', () => {
  usernames = ['john', 'Teja', 'ooha', 'admin'];
  expect(usernames).toContain('admin');
});

// working with async data

//promise
test('user fetched name should be Leanne Graham', () => {
  return functions.fetchUser().then((data) => {
    expect(data.name).toEqual('Leanne Graham');
  });
});

//Async await
test('user fetched name should be Leanne Graham', async () => {
  const data = await functions.fetchUser();
  expect(data.name).toEqual('Leanne Graham');
});
