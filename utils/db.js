const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/h51801");

module.exports = mongoose;