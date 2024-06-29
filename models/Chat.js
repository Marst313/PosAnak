const mongoose = require('mongoose');

const PosyanduChatSchema = new mongoose.Schema({
  question: {
    type: String,
  },
  history: {
    type: String,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'Hanya user yang bisa mengakses chat!'],
  },
  isNewChat: {
    type: Boolean,
    default: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

const ChatModel = mongoose.model('Chat', PosyanduChatSchema);

module.exports = ChatModel;
