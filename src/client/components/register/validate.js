const validate = values => {
  const errors = {};
  if (!values.firstname) {
    errors.firstname = 'Required';
  } else if (!/^[A-Za-z ]{2,30}$/.test(values.firstname)) {
    errors.firstname = 'Name should only contains alaphabet and space';
  }
  if (!values.lastname) {
    errors.lastname = 'Required';
  } else if (!/^[A-Za-z ]{2,30}$/.test(values.lastname)) {
    errors.lastname = 'Name should only contains alaphabet and space';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.sexe) {
    errors.sexe = 'Required';
  }
  if (!values.age) {
    errors.age = 'Required';
  }
  return errors;
};

export default validate;


// email: Joi.string().email(),
//   login: Joi.string().alphanum().min(3).max(30).required(), //eslint-disable-line
//   password: Joi.string().regex(/^(?=.*[a-zA-Z])(?=.*\W)(?=.*[0-9]).{6,25}$/).required(),
//   firstname: Joi.string().regex(/^[A-Za-z ]{2,30}$/).required(),
//   lastname: Joi.string().regex(/^[A-Za-z ]{2,30}$/).required(),
//   age: Joi.number().integer().min(18).max(99)
//   .required(),