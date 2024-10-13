import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";
import UserFactory from "../config/UserFactory .js";
import JwtStrategy from "../config/strategy/jwtStrategy.js";
import AuthContext from "../config/strategy/authContext.js";



export const signup = async (req, res, next) => {
    try {
        const { type, ...userData } = req.body;

        const user = await UserFactory.createUser(type, userData);

        const { password, ...rest } = user._doc;
        res.status(201).json(rest);

    } catch (error) {
        next(errorHandler(400, error.message));
    }
};




// export const signin = async(req, res, next) =>{
//    const{username,password} = req.body;
//    try{
//        const validUser = await User.findOne({username});
//        if(!validUser) return next(errorHandler(404,'User not found'));
//        const validPassword = bcryptjs.compareSync(password,validUser.password);
//        if(!validPassword) return next(errorHandler(401,'Invalid password'));
//        const token = jwt.sign({id:validUser._id},process.env.Jwt_SECRET);
//        const {passsword:Pass,...rest} = validUser._doc;
//        res.cookie('access_token',token,{httpOnly:true}).status(200).json(rest);
//    }catch(error){
//         next(error);
//    }
// };

export const signin = async (req, res, next) => {
    const { username, password } = req.body;

    try {
        const jwtStrategy = new JwtStrategy();
        const authContext = new AuthContext(jwtStrategy);

        
        const { user, token } = await authContext.authenticate(username, password);

        const { password: Pass, ...rest } = user._doc; 
        res.cookie('access_token', token, { httpOnly: true }).status(200).json(rest);
    } catch (error) {
        next(errorHandler(401, error.message)); 
    }
};


// export const signin = async (req, res, next) => {
//     const { username, password } = req.body;
    
//     try {
//         const validUser = await User.findOne({ username });
//         if (!validUser) return next(errorHandler(404, 'User not found'));
        
//         const validPassword = bcryptjs.compareSync(password, validUser.password);
//         if (!validPassword) return next(errorHandler(401, 'Invalid password'));
        
//         // Generate JWT token
//         const token = jwt.sign({ id: validUser._id }, process.env.Jwt_SECRET, { expiresIn: '1h' });
        
//         // Exclude password from response
//         const { password: Pass, ...rest } = validUser._doc;
        
//         // Send token in cookie
//         res.cookie('access_token', token, { httpOnly: true }).status(200).json(rest);
//     } catch (error) {
//         next(error);
//     }
// };


export const signOut = async ( req , res , next) => {

   try{
       res.clearCookie('access_token');
       res.status(200).json('User has been logged out!') ;

   }catch (error){
       next(error)
   }
}