const express = require("express");
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

const router = express.Router();

router.post("/login", authController.login);
router.post("/signup", authController.singup);
router.post(
  "/add_admin",
  authController.protect,
  authController.checkAdmin,
  authController.addAdmin
);

router.patch(
  "/update_password",
  authController.protect,
  authController.updatePassword
);

router
  .route("/")
  .get(
    authController.protect,
    authController.checkAdmin,
    userController.getAllUser
  )
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

router.route("/get_user").post(authController.protect, userController.getUser);

module.exports = router;
