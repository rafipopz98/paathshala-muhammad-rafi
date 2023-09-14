const express = require("express");
const router = express.Router();
const AWS = require("aws-sdk");
// const {accesskey,secretKey} =require("./key")

router.get("/all", async (req, res) => {
  try {
    AWS.config.update({
      accessKeyId: "AKIASBOXW2FZUCJMVKYG",
      secretAccessKey: "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",
      region: "us-east-1",
    });

    const docClient = new AWS.DynamoDB.DocumentClient();

    const params = {
      TableName: "job-trial",
    };
    docClient.scan(params, function (err, data) {
      if (err) {
        // console.log(err);
        res.send({
          success: false,
          data: null,
          error: err,
        });
      } else {
        const { Items } = data;
        res.send({
          success: true,
          data: Items,
          error: null,
        });
      }
    });
  } catch (e) {
    console.log("error while handling get jobs request:", e);
    return { success: false, data: null, error: e };
  }
});
let i = 123;
router.post("/post", async (req, res) => {
  try {
    console.log("req.body", req.body);
    AWS.config.update({
      accessKeyId: "AKIASBOXW2FZUCJMVKYG",
      secretAccessKey:"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",
      region: "us-east-1",
    });
    const date = Date.now();
    const docClient = new AWS.DynamoDB.DocumentClient();
    let params = {
      TableName: "job-trial",
      Item: { id: Math.floor(date), ...req.body },
    };
    docClient.put(params, function (err, data) {
      if (err) {
        log
        res.send({
          success: false,
          data: null,
          error: null,
        });
      } else {
        res.send({
          success: true,
          data: data,
          error: null,
        });
      }
    });
  } catch (e) {
    console.log("error while handling Create job request:", e);
    return { success: false, data: null, error: e };
  }
});

module.exports = router;

// https://youtu.be/40a-UfaJX4Y