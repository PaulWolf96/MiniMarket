const {Router} = require('express');

const router = Router();
const RegisterController = require("../controller/RegisterController");

router.post("/users", RegisterController.save);

module.exports = router;