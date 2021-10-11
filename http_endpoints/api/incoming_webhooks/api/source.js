exports = function(payload, response) {
  const mongodb = context.services.get("mongodb-atlas");
  const requestLogs = mongodb.db("Spot_Chair").collection("Sensor_Data");
  obj = EJSON.parse(payload.body.text());
  requestLogs.insertOne({
    device: obj.device,
    data: obj.data.replace("\n","")
  }).then(result => {
    response.setStatusCode(201);
    //response.setBody(result.insertedId);
  })
};