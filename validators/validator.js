const { check, validationResult } = require('express-validator/check');

exports.createUserValidator = (data) => {
  console.log(data.first_name);
  check(data.first_name).isAlpha();
  check(data.last_name).isAlpha();
};

// app.post('/user', [
//   check('username').isEmail(),
//   check('password').isLength({ min: 5 })
// ], (req, res) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(422).json({ errors: errors.array() });
//   }
//
//   User.create({
//     username: req.body.username,
//     password: req.body.password
//   }).then(user => res.json(user));
// });
