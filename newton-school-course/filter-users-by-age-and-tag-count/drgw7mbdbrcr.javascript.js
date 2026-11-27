db.users.find(
  {
    age: { $gte: 30 },
    tags: { $size: 3 }
  },
  {
    _id: 0,
    name: 1,
    age: 1,
    tags: 1
  }
);