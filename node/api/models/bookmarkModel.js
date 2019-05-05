'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// * defining the properties of a Bookmark
var BookmarkSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the bookmark'
  },
  url: {
    type: String,
    required: 'Kindly enter the url of the bookmark'
  },
  category: {
    type: String,
    required: 'Kindly enter the category of the bookmark'
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['new', 'known', 'obsolete']
    }],
    default: ['known']
  }
});

// * creating the bookmarks schema in mongodb
module.exports = mongoose.model('Bookmarks', BookmarkSchema);