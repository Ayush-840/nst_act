db.movies.aggregate([
  {
    $match: {
      genre: "Sci-Fi"
    }
  },
  {
    $sort: {
      rating: -1,
      release_year: -1
    }
  },
  {
    $project: {
      _id: 0,
      title: 1,
      rating: 1,
      release_year: 1
    }
  }
]);