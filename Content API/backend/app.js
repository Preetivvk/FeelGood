const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const VideoRoutes = require("./routes/VideoRoutes");
const path = require("path");
const Video = require("./models/Video");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  // to remove cors error
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

app.use("/api/video", VideoRoutes);
//qvV9TP0m4kBY5cc

app.get("/getUsers", (req, res) => {
  Video.find()
    .then((videos) => {
      console.log("Users:", videos);
      res.json(videos);
    })
    .catch((err) => {
      console.error("Error fetching users:", err);
      res.json(err);
    });
});

mongoose
  .connect(
    `mongodb+srv://msanskriti24:QUGyQjDIKSCfAO77@cluster0.45rnv1t.mongodb.net/`
  )
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
