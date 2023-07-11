const UserList = [{
        id: 1,
        name: 'John Doe',
        username: 'johndoe',
        age: 25,
        nationality: 'USA',
        friends: [{
            id: 2,
            name: 'Jane Smith',
            username: 'janesmith',
            age: 30,
            nationality: 'CANADA'
        }]
    },
    {
        id: 2,
        name: 'Jane Smith',
        username: 'janesmith',
        age: 30,
        nationality: 'CANADA'
    },
    {
        id: 3,
        name: 'Alice Johnson',
        username: 'alicejohnson',
        age: 28,
        nationality: 'AUSTRALIA',
        friends: [{
            id: 4,
            name: 'Bob Williams',
            username: 'bobwilliams',
            age: 32,
            nationality: 'UK'
        }]
    },
    {
        id: 4,
        name: 'Bob Williams',
        username: 'bobwilliams',
        age: 32,
        nationality: 'UK'
    },
    {
        id: 5,
        name: 'Emily Davis',
        username: 'emilydavis',
        age: 27,
        nationality: 'GERMANY',
        friends: [{
            id: 6,
            name: 'Michael Brown',
            username: 'michaelbrown',
            age: 35,
            nationality: 'USA'
        }]
    },
    {
        id: 6,
        name: 'Michael Brown',
        username: 'michaelbrown',
        age: 35,
        nationality: 'USA'
    }
];

const MovieList = [
  {
    id: 1,
    name: 'Lord of the Rings',
    yearOfPublication: 2020,
    isInTheaters: true
  },
  {
    id: 2,
    name: 'Game of Thrones',
    yearOfPublication: 2018,
    isInTheaters: false
  },
  {
    id: 3,
    name: 'The Walking Dead',
    yearOfPublication: 2022,
    isInTheaters: true
  },
  {
    id: 4,
    name: 'Batman',
    yearOfPublication: 2019,
    isInTheaters: false
  },
  {
    id: 5,
    name: 'The Flash',
    yearOfPublication: 2021,
    isInTheaters: true
  }
];

module.exports = {
    UserList, MovieList
};