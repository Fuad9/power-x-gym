exports = function (payload, response) {
  var profile = {};
  var result = {};

  if (payload.body) {
    profile = EJSON.parse(payload.body.text());

    console.log("parsed payload body", JSON.stringify(profile));

    const collection = context.services
      .get("mongodb-atlas")
      .db("gymDB")
      .collection("customers");

    return collection.insertOne(profile);
  }
  return result;
};
