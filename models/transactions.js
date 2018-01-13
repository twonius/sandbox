var mongoose = require("mongoose");

var transactionsSchema = mongoose.Schema({
    text: String,
    amount: Number
    }
);

module.exports = mongoose.model("Transactions", transactionsSchema);
