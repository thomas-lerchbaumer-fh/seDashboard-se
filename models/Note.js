const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  note: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model('contact', ContactSchema);
