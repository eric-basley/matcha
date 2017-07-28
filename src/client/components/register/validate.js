const validate = values => {
  const errors = {};
  if (!values.firstname) {
    errors.firstName = 'Required';
  }
  if (!values.lastname) {
    errors.lastName = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.sexe) {
    errors.sex = 'Required';
  }
  return errors;
};

export default validate;
