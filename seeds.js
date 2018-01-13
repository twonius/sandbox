var mongoose = require("mongoose");
var Transactions = require("./models/transactions");


var data = [
    {
        text: "Waylon Dalton",
        amount: 1

    },
    {
        text: "Justine Henderson",
          amount: 2
    },
    {
        text: "Abdullah Lang",
          amount: 3
    }
]

function seedDB(){
  data.forEach(function(seed){
    Transactions.create(seed,function(err,Transactions){
      if(err){
        console.log(err)
      } else{
      console.log("created transactions")}
    } )
  })
}

module.exports = seedDB;
