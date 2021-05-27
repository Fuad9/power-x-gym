const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;
require("dotenv").config();
const MongoClient = require("mongodb").MongoClient;
const uri = `${process.env.MONGO_CONN_URI}`;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

client.connect((err) => {
    const customersCollection = client.db("gymDB").collection("customers");

    app.post("/customers", (req, res) => {
        const firstname = req.body.firstname;
        const email = req.body.email;
        const addresslineone = req.body.addresslineone;
        const postcode = req.body.postcode;
        const city = req.body.city;
        const lastname = req.body.lastname;
        const gender = req.body.gender;
        const addresslinetwo = req.body.addresslinetwo;
        const mobileno = req.body.mobileno;
        const country = req.body.country;

        customersCollection
            .insertOne({
                firstname,
                email,
                addresslineone,
                postcode,
                city,
                lastname,
                gender,
                addresslinetwo,
                mobileno,
                country,
            })
            .then((result) => {
                res.send(result);

                console.log(result.insertedCount > 0);
            });
    });
});

app.listen(port, () => console.log(`server is listening at ${port}`));
