// middleware/authMiddleware.js

import jwt from 'jsonwebtoken';
import { errorHandler } from '../utils/error.js';

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
        return next(errorHandler(401, 'No token provided. Access denied.'));
    }

    jwt.verify(token, process.env.Jwt_SECRET, (err, decoded) => {
        if (err) {
            return next(errorHandler(403, 'Invalid or expired token.'));
        }
        req.user = decoded; // Attach decoded token data to the request
        next();
    });
};
