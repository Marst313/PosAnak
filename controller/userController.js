const User = require('./../models/User');
const PosyanduModel = require('./../models/User');

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  PosyanduModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.status(200).json({
          status: 'Success',
          email,
          name: user.name,
          role: user.role,
        });
      } else {
        res.status(403).json({
          status: 'Error',
          message: 'Password is wrong !',
        });
      }
    } else {
      res.json('No record existed');
    }
  });
};

exports.createUser = async (req, res) => {
  const { email } = req.body;
  const existingUser = await PosyanduModel.findOne({ email });

  if (existingUser) {
    return res.status(400).json({ message: 'Email has already been used.' });
  }
  PosyanduModel.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
};
