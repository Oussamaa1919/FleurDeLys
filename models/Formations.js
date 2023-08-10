const mongoose = require('mongoose');

const FormationsSchema = new mongoose.Schema({
  
  description: {
    type: String,
    required: true
  },
  
  
});

module.exports = mongoose.model('formations', FormationsSchema);
