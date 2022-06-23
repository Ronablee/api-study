const mongoose = require ('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  tittle: {
    type: String,
    required: true,
  },
  
  description: {
    type: String,
    required: true,
  },
 
  date: { type: Date, default: Date.now },
  hidden: Boolean,

});

module.exports  = mongoose.model('Data', productSchema);