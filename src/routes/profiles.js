const express = require("express");

const {
  getAllProfile,
  createNewCustomer,
} = require("../controller/profiles.js");

const router = express.Router();

router.post("/customer/createNewCustomer", createNewCustomer);
router.get("/profile/getAllProfiles", getAllProfile);

module.exports = router;
