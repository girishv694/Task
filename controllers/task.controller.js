const express = require("express");
const mongoose = require("mongoose");
const Task = require("../models/task.model");

const router = express.Router();

router.post("/task", async (req, res) => {
  //clear database before inserting data into db

  Task.deleteMany({}, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Database deleted");
    }
  });

  //storing data into db
  let data = await Task.create(req.body);
  if (data) {
    return res.status(201).send({ data });
  } else {
    return res.json({
      error: "Something wrong please try again in some time",
    });
  }
});
//Updating the data
router.post("/update", async (req, res) => {
  let d = await Task.findOneAndUpdate(
    { id: 1 },
    { $set: { name: req.body.name } }
  );

  return res.status(201).send({ message: "Successfully Updated" });
});

module.exports = router;
