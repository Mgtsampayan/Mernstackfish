require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// routes

// app.get('/', (req, res) => {
//     res.json({ message: 'Welcome to my Practice React!' })
// });
app.use("/api/workouts", workoutRoutes);

// connect to the Database
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log("Connected to Database & Running the Port Successfully", process.env.PORT);
        });
    })
    .catch((error) => {
        console.log(error);
    });

// listen for requests
// app.listen(process.env.PORT, () => {
//     console.log('Running the Port Successfully', process.env.PORT)
// })
