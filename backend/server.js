const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();  // This should be called before using `process.env`

// Connect to MongoDB
const USERNAME = "mern-pos";
const PASSWORD = "USoAMRqBYhpt6whj"; 
const DB_NAME = "pos";
const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@samplecluster.sf3sp9g.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

const connectDB = async (url) => {
    try {
        const conn = await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

connectDB(URL);

const app = express();
app.use(express.json());

app.use('/api/products', require('./routes/productRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
