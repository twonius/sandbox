exports = function(payload, response) {
  const mongodb = context.services.get("mongodb-atlas");
  const requestLogs = mongodb.db("Spot_Chair").collection("Sensor_Data");
  requestLogs.insertOne({
    body: EJSON.parse(payload.body.text()),
    query: payload.query
  }).then(result => {
    response.setStatusCode(201);
    response.setBody(result.insertedId);
  })
};