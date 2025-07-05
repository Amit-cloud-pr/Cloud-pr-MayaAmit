const express = require("express");
const controller = require("./controller");

const router = express.Router();

router.post("/name", controller.addName);
router.get("/name", controller.getNames);
router.delete("/name", controller.deleteName);

module.exports = router;
