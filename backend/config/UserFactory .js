import bcryptjs from 'bcryptjs';
import User from '../models/user.model.js';

class UserFactory {
    static async createUser(type, userData) {
        let role;
        switch(type) {
            case 'doctor':
                role = 'doctor';
                break;
            case 'staff':
                role = 'staff';
                break;
            default:
                throw new Error('Invalid user type');
        }

        if (userData.password) {
            userData.password = bcryptjs.hashSync(userData.password, 10);
        }

        const user = new User({
            empname: userData.empname,
            phone_number: userData.phone_number,
            username: userData.username,
            password: userData.password,
            avatar: userData.avatar,
            role: role
        });

        await user.save();
        return user;
    }
}

export default UserFactory;
