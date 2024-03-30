const mongoose = require("mongoose");

const Video = require("../models/Video");

const getVideos = async (req, res, next) => {
  let videos;
  try {
    videos = await Video.find({});
  } catch (err) {
    console.log("Fetching videos failed");
    return next(err);
  }
  res.json({
    videos: videos.map((video) => video.toObject({ getters: true })),
  });
};

const createVideo = async (req, res, next) => {
  // const errors = validationResult(req);
  //POST request
  const { title, description, link } = req.body;
  //const title=req.body.title

  const createdVideo = new Video({
    title,
    description,
    link,
  });

  // DUMMY_PLACES.push(createdPlace); //unshift() to add as first element

  try {
    // Save the createdVideo to MongoDB
    const result = await createdVideo.save();

    res.status(201).json({
      message: "Video created successfully",
      video: result,
    });
  } catch (error) {
    console.error("Error creating video:", error);
    res.status(500).json({ error: "Internal server error" });
  }

  // res.status(201).json({ video: createdVideo });
};

exports.getVideos = getVideos;
exports.createVideo = createVideo;
