const axios = require('axios');

const functions = {
  // arrow function to add
  add: (num1, num2) => num1 + num2,
  // checking for null value
  isNull: () => null,
  // take the value and return it
  checkValue: (x) => x,
  //
  createUser: () => {
    const user = { firstname: 'Tejaswini' };
    user['lastname'] = 'Nallapaneni';
    return user;
  },

  // axios
  // jsonplaceholder is fake rest api for testing
  // to get users and other details
  fetchUser: () =>
    axios
      .get('https://jsonplaceholder.typicode.com/users/1')
      .then((res) => res.data)
      .catch((err) => 'error'),
};

module.exports = functions;
