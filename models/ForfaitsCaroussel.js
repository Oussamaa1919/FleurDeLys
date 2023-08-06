const mongoose = require('mongoose');

const ForfaitsCaroussel = new mongoose.Schema({
  
  photos: [
    {
      imagePath: {
        type: String,
        required: true,
      },
      
    },
  ],
  
  
});

module.exports = mongoose.model('ForfaitsCaroussel', ForfaitsCarousselSchema);
