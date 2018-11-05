var keystone = require('keystone');

var Recipe = keystone.list('Recipe');

exports.list = function(req, res) {
  Recipe.model
    .find(function(err, items) {
      if (err) {
        return res.apiError('database error', err);
      }
      res.apiResponse({
        recipe: items
      });
    })
    .limit(Number(req.query.limit));
};
