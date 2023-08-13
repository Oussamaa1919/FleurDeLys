const mongoose = require('mongoose');

const EquipeCaroussel = new mongoose.Schema({
  
  text: {
    type: String,
  
  },
  photos: [{
    type: String,
  }],
  
  
});

module.exports = mongoose.model('equipecaroussel', EquipeCaroussel);
