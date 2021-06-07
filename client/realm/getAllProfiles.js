// This function is the webhook's request handler.
exports = async function (payload, response) {
  const collection = context.services
    .get("mongodb-atlas")
    .db("gymDB")
    .collection("customers");

  let customerList = await collection.find().toArray();

  //convert objectId to string
  customerList.forEach((cl) => {
    cl._id = cl._id.toString();
  });

  return customerList;
};
