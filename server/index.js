require("dotenv").config();

const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

const contactRoutes =
    require("./routes/contactRoutes");

const app = express();

app.use(cors());

app.use(express.json());

mongoose.connect(
    process.env.MONGO_URI
)

    .then(() => {


        console.log(
            "MongoDB Connected"
        );


    })

    .catch(err => {


        console.log(err);


    });
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Portfolio Backend is Running 🚀"
    });
});
app.use(
    "/api/contact",
    contactRoutes
);

app.listen(
    process.env.PORT,
    () => {

        console.log(
            `Server Running on ${process.env.PORT}`
        );

    });

