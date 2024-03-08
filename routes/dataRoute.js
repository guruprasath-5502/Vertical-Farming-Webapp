const express = require("express");
const dataController = require("../controller/dataController");

const router = express.Router();

router.get("/temperature", dataController.temperature);

router.get("/waterlevel", dataController.waterLevel);

module.exports = router;
