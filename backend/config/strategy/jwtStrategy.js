import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';
import User from '../../models/user.model.js';
import AuthStrategy from './staergy.js';

class JwtStrategy extends AuthStrategy {
    async authenticate(username, password) {
        const validUser = await User.findOne({ username });
        if (!validUser) throw new Error('User not found');

        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) throw new Error('Invalid password');

        const token = jwt.sign({ id: validUser._id }, process.env.Jwt_SECRET);
        return { user: validUser, token };
    }
}

export default JwtStrategy; 
