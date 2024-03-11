import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  updateProfileController,
  getOrdersController,
  getAllOrdersController,
  orderStatusController,
} from "../controller/authController.js";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";



const router = express.Router();

// REGISTER || METHOD POST
router.post("/register", registerController);
// LOGIN
router.post("/login", loginController);
// FORGOT PASSWORD
router.post("/forgot-password", forgotPasswordController);

// TEST - Accessible to both Admins and Team Admins
router.get("/test", requireSignIn, isAdmin, testController);

// Protected routes for user - Accessible to all authenticated users
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

// Protected routes for Admin and Team Admin
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

// Update profile - Accessible to all authenticated users
router.put("/profile", requireSignIn, updateProfileController);

// Order routes
router.get("/orders", requireSignIn, getOrdersController);

// All orders - Accessible to Admins and Team Admins
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// Order status update - Accessible to Admins and Team Admins
router.put("/order-status/:orderId", requireSignIn, isAdmin, orderStatusController);

export default router;
