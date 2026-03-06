import { Router } from "express";

import { registration } from "../Controllers/registration.js";
import { adminregistration } from "../Controllers/adminregistration.js";
import { login } from "../Controllers/login.js";
import { logout } from "../Controllers/logout.js";
import { verifyToken } from "../Middlewares/verifyToken.js";
import { protectedRoutes } from "../Middlewares/protectedRoutes.js";
import { dashboard } from "../Controllers/dashboard.js"
import { admindashboard } from "../Controllers/admindashboard.js"






export const router = Router()

// Simple Routes
// Post
router.route("/registration").post(registration)
router.route("/adminregistration").post(adminregistration)
router.route("/login").post(login)
router.route("/logout").post(verifyToken,logout)
// Get
router.route("/dashboard").get(dashboard)

// Protected Routes
router.route("/admindashboard").get(verifyToken,protectedRoutes,admindashboard)
