const mongoose = require('mongoose'),
  bcrypt = require('bcryptjs'),
  config = require('../config/database');

const GallerySchema = mongoose.Schema({
  fileName: {
    type: String,
    required: true,
  },
  uploadedBy: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
  mimeType: {
    type: String,
    required: true,
  }
});

const Gallery = module.exports = mongoose.model('Gallery', GallerySchema);