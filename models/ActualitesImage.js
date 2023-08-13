const mongoose = require('mongoose');

const ActualitesImage = new mongoose.Schema({
  text: {
    type: String,
  
  },
  photo: {
    type: String,
    required: true,
  }
  
  
});

module.exports = mongoose.model('actualitesimage', ActualitesImage);
