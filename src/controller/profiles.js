const Customer = require("../models/profiles.js");

exports.createNewCustomer = (req, res) => {
  const {
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
  } = req.body;
  const customer = new Customer({
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
  });
  customer.save((error, customer) => {
    if (error) res.status(400).json({ error });
    if (customer) res.status(201).json({ customer });
  });
};

exports.getAllProfile = (req, res) => {
  Customer.find({}).exec((error, customer) => {
    error && res.status(400).json({ error });

    customer && res.status(200).json(customer);
  });
};
