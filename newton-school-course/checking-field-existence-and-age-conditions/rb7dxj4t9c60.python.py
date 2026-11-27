db.users.find(
  {
    middleName: { $exists: true },
    age: { $mod: [5, 0] }
  },
  {
    _id: 0,
    name: 1,
    middleName: 1,
    age: 1
  }
);