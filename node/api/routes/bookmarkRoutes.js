'use strict';
module.exports = function(app) {
  var bookmarksController = require('../controllers/bookmarkController');

  // * Bookmarks Routes
  app.route('/bookmarks')
    .get(bookmarksController.list_all_bookmarks)
    .post(bookmarksController.create_a_bookmark);


  app.route('/bookmarks/:bookmarkId')
    .get(bookmarksController.read_a_bookmark)
    .put(bookmarksController.update_a_bookmark)
    .delete(bookmarksController.delete_a_bookmark);
};