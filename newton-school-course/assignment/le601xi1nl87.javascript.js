],
  },
  {
    id: 45,
    title: "Building Scalable Distributed Systems",
    comments: [
      { id: 202, text: "Amazing!" },
    ],
  },
];
app.get("/posts/:postId/comments/:commentId", (req, res) => {
  const postId = parseInt(req.params.postId, 10);
  const commentId = parseInt(req.params.commentId, 10);
  const post = postsData.find((p) => p.id === postId);
  if (!post) {
    return res.status(404).send("Post not found");
  }
  const comment = post.comments.find((c) => c.id === commentId);
  if (!comment) {
    return res.status(404).send("Comment not found");
  }
  return res.status(200).json(comment);
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
module.exports = app;