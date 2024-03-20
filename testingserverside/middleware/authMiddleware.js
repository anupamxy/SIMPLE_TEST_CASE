
import userModel from "../models/userModel.js";

//Protected Routes token base
import jwt from 'jsonwebtoken';

export const requireSignIn = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    console.log(token);

    if (!token) {
      return res.status(401).json({ error: 'Please authenticate using a valid token' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
    const user = await userModel.findById(decoded._id);
    console.log(user);

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ error: 'Invalid token' });
  }
};
//admin acceess
export const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user.role !== 1) {
    //   return res.status(401).send({
    //     success: false,
    //     message: "UnAuthorized Access",
    return res.redirect("/");
   
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      error,
      message: "Error in admin middelware",
    });
  }
};
