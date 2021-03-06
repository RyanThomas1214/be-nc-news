const {
  addComment,
  fetchCommentsByArticle,
  updateComment,
  removeComment
} = require("../models/comments-model");

exports.postComment = (req, res, next) => {
  const { article_id } = req.params;
  const body = req.body;
  addComment(article_id, body)
    .then(([comment]) => {
      res.status(201).send({ comment });
    })
    .catch(next);
};

exports.getCommentsByArticle = (req, res, next) => {
  const { article_id } = req.params;
  const query = req.query;
  fetchCommentsByArticle(article_id, query)
    .then(comments => {
      res.status(200).send({ comments });
    })
    .catch(next);
};

exports.patchComment = (req, res, next) => {
  const { comment_id } = req.params;
  const body = req.body;
  updateComment(comment_id, body)
    .then(([comment]) => {
      res.status(200).send({ comment });
    })
    .catch(next);
};

exports.deleteComment = (req, res, next) => {
  const { comment_id } = req.params;
  removeComment(comment_id)
    .then(() => {
      res.sendStatus(204);
    })
    .catch(next);
};
