const validator = require('validator');

exports.userValidation = (data) => {
  const validFirstName = validator.isAlpha(data.first_name);
  const validLastName = validator.isAlpha(data.last_name);
  return validFirstName & validLastName;
};
