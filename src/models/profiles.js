const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    addresslineone: {
      type: String,
      required: true,
    },
    postcode: {
      type: Number,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    addresslinetwo: {
      type: String,
      required: true,
    },
    mobileno: {
      type: Number,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Customer", customerSchema);
