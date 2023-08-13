const mongoose = require('mongoose');

const EquipeImageSchema = new mongoose.Schema({
  text: {
    type: String,
  
  },
  photo: {
    type: String,
    required: true,
  }
  
  
});

module.exports = mongoose.model('equipeimage', EquipeImageSchema);
