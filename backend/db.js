const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://2100030338:12345@cluster0.vodaxez.mongodb.net/ecommercemern-1?retryWrites=true&w=majority';

const mongoDB = async () => {
    try {
        // Connect to the database using async/await without a callback
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,  // Add this option to handle the new connection engine
        });
        
        console.log("Connected to MongoDB");

        // Fetch the data from the collection
        const fetched_data = await mongoose.connection.db.collection("ecommerce_items").find({}).toArray();
        
        global.ecommerce_items = fetched_data;
        console.log(fetched_data);
        
        const fetched_category_data = await mongoose.connection.db.collection("ecommerce_Category").find({}).toArray();
        global.ecommerce_Category = fetched_category_data;
        console.log("ecommerce_Category:", fetched_category_data);

    } catch (err) {
        console.log("---", err);
    }
};

module.exports = mongoDB;
