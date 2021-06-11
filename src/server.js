const express = require('express');
const app = express();
const env = require('dotenv');
var cors = require('cors')
 //const bodyParser = require('body-parser');
const { Mongoose } = require('mongoose');
const mongoose = require('mongoose');


 env.config();
 app.use(cors())
 app.use(express.json())

 //routes
 const authRoutes = require('./routes/auth');



//configure the environment




//conntion of database
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.raejj.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useCreateIndex: true

    }
).then(() => {
    console.log('Database connected succesfully');
});



//using bodyparser
//app.use(bodyParser());

app.use('/api',authRoutes);


// app.get('/', (req, res, next) => {
//     res.status(200).json({
//         message:"hello from server"
//     });
// });

// app.post('/data', (req, res, next) => {
//     res.status(200).json({
//         message: req.body
//     });
// });



app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});