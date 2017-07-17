import Joi from 'joi';
import bcrypt from 'bcrypt-as-promised';
import users from '../../models/users';
import { schemaResetPassword } from '../../../lib/validator';

const resetPassword = (req, res, next) => {
  const { password } = req.body;
  console.log('ALLAN');
  console.log(req.body);
  if (Joi.validate(req.body, schemaResetPassword).error) {
    console.log('error');
    return next({ details: 'wrong format' });
  }
  console.log('update');
  return bcrypt.hash(password, 10)
      .then(hashedPassword => users.update({ password: hashedPassword }, req.id));
};

export default resetPassword;
