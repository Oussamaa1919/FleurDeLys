const mongoose = require('mongoose');

const FormationCaroussel = new mongoose.Schema({
  
  text: {
    type: String,
  
  },
  photos: [{
    type: String,
  }],
  
  
});

module.exports = mongoose.model('formationcaroussel', FormationCaroussel);
