const express = require("express");
const { userController } = require("../../controllers");

const router = express.Router();

router.get("/", userController.getAllUsers);

router.get("/:id", userController.getUserById);

router.post("/", userController.createNewUser);

router.put("/:id", userController.updateUser);

router.delete("/:id", userController.deleteUser);


module.exports = router;