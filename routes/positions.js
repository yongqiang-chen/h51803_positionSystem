var express = require('express');
var router = express.Router();
const PositionController = require("../controllers/PositionController");

router.get("/add", PositionController.add);



module.exports = router;
