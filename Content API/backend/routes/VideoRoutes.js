const express = require("express");

const videoControllers = require("../controllers/video-controller");
const router = express.Router();
// const UserModel = require("../models/Video");

router.get("/", videoControllers.getVideos);
router.post(
  "/post",

  //   check("title").isLength({ max: 50 }),
  //   check("description").not().isEmpty(),
  //   check("link").not().isEmpty(),

  (req, res, next) => {
    //   console.log(req.body.description);
    //   console.log(req.body.source);
    //   console.log(req.body.category);
    next(); // Call next to move to the next middleware (usersControllers.signup)
  },
  //   factControllers.createFact
  videoControllers.createVideo
);

// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const UserModel = require("./models/Users");
// const { exec } = require("child_process");
// const path = require("path");
// const fs = require("fs").promises;
// const app = express();

// app.use(cors());
// app.use(express.json());

// mongoose.connect("mongodb://localhost:27017/testing");

module.exports = router;
