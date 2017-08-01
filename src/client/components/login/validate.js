const validate = values => {
  const errors = {};
  if (!values.login) {
    errors.login = 'Required';
  } else if (!/^[A-Za-z0-9]{3,30}$/.test(values.login)) {
    errors.login = 'Login should only contains alpha or num be 30 length max';
  }
  if (!values.password) {
    errors.password = 'Required';
  } else if (!/^(?=.*[a-zA-Z])(?=.*\W)(?=.*[0-9]).{6,25}$/.test(values.password)) {
    errors.password = 'Password should contain at least one char and one num, be 6 length min';
  }
  return errors;
};

export default validate;
