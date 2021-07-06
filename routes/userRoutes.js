const express = require("express");
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

const router = express.Router();

router.post("/login", authController.login);
router.post("/signup", authController.singup);

router.patch("/update_password", authController.updatePassword);

router
  .route("/")
  .get(userController.getAllUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

router.route("/get_user").post(userController.getUser);

module.exports = router;
