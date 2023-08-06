const mongoose = require('mongoose');

const VideoAccueilSchema = new mongoose.Schema({
  
  videoPath: {
    type: String,
    required: true,
  }
  
  
});

module.exports = mongoose.model('videoacceuil', VideoAccueilSchema);
