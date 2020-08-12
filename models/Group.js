const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GroupSchema = new Schema({
  name: {
    type: String,
    required: [true, 'A Group name is required'],
    unique: true,
    trim: true,
    maxlength: [50, 'Group name can not be more than 50 characters']
  },
  slug: String,
  description: {
    type: String,
    maxlength: [150, 'Group description can not be longer than 50 characters']
  }
});

module.exports = mongoose.model('Group', GroupSchema);
