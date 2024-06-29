const { GoogleGenerativeAI } = require('@google/generative-ai');
const catchAsync = require('../utils/catchAsync');
const Chat = require('../models/Chat');
const User = require('../models/User');
const AppError = require('../utils/appError');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function run(msg, history) {
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

  const chat = model.startChat({
    history,
    generationConfig: {
      maxOutputTokens: 100,
    },
  });

  const result = await chat.sendMessage(msg);
  const response = await result.response;
  const text = response.text();
  return text;
}

exports.generateChatNew = catchAsync(async (req, res, next) => {
  let history = [];

  // ! 1.) Check if there is no user
  if (!req.user.id) return next(new AppError('Silahkan login terlebih dahulu!', 401));

  // ! 2.) Send user message to CHAT BOT and get Response
  const response = await run(req.body.message, history);

  // ! 3.) Create New History
  history.push(
    {
      role: 'user',
      parts: [{ text: req.body.message }],
    },
    {
      role: 'model',
      parts: [{ text: response }],
    }
  );

  //! 4.) Convert history array to JSON string
  const historyString = JSON.stringify(history);

  // ! 5.) Store history and chat in DB
  await Chat.create({ question: req.body.message, user: req.user.id, history: historyString, isNewChat: false });

  res.status(200).json({
    message: response,
  });
});

exports.generateNextChat = catchAsync(async (req, res, next) => {});
