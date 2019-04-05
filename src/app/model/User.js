const { mongoose, Schema } = require('mongoose');

const RoleSchema = new Schema({
  name: { type: String, required: true, default: 'user' },
  code: { type: Number, required: true, default: 2 }
});

const UserSchema = new Schema({
  name: { type: String, required: true },
  user: { type: String, required: true, unique: true },
  pass: { type: String, require: true },
  ekey: { type: String },
  role: RoleSchema
});
const User = mongoose.model('User', UserSchema);
module.exports = User;
