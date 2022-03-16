exports = function(payload, response) {
  const mongodb = context.services.get("mongodb-atlas");
  const requestLogs = mongodb.db("Spot_Chair").collection("TimeSeries");
  obj = EJSON.parse(payload.body.text());
  requestLogs.insertOne({
    tstamp: Date.now(),
    device: obj.device,
    data: obj.data.replace("\n",""),
    batt: obj.batt.replace("\n","")
  }).then(result => {
    response.setStatusCode(201);
    //response.setBody(result.insertedId);
  })
};