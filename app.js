var seedDB      = require('./seeds'),
    mongoose    = require("mongoose"),
    Transactions = require('./models/transactions')



    // assign mongoose promise library and connect to database
    mongoose.Promise = global.Promise;

    const databaseUri = process.env.MONGODB_URI || 'mongodb://localhost/experimental';

    mongoose.connect(databaseUri, { useMongoClient: true })
          .then(() => console.log(`Database connected`))
          .catch(err => console.log(`Database connection error: ${err.message}`));
// seedDB(); //seed the database
seedDB();

var totals = Transactions.aggregate({$group: { _id :  "$text", total: {$sum: "$amount"} }});
console.log(totals);
