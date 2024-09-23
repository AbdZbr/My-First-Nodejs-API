const mongoose = require('mongoose');

const followerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  followToOurAccount: {  // Updated field name
    type: String,
    required: true
  },
  followDate: {  // Updated field name
    type: Date,
    required: true,
    default: Date.now
  }
});

module.exports = mongoose.model('Follower', followerSchema);  // Corrected schema name
