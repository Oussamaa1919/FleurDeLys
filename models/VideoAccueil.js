const mongoose = require('mongoose');

const VideoAccueilSchema = new mongoose.Schema({
  text: {
    type: String,
  
  },
  video: {
    type: String,
    required: true,
  }
  
  
});

module.exports = mongoose.model('videoacceuil', VideoAccueilSchema);
