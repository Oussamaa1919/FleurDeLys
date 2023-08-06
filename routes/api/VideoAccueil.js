const express = require('express');
const router = express.Router();
const path = require('path');
const VideoAccueil = require('../../models/VideoAccueil');
const upload = require('../../middleware/storage')
const adminauth = require('../../middleware/adminauth');



// POST route to add or update a video
router.post('/',adminauth,upload.single('video'), async (req, res) => {
  try {
    
    const videoPath = req.file ? req.file.path : null;

    let video;

    // Check if the video exists by title
    video = await VideoAccueil.findOne({ title });

    if (video) {
      // If video exists, update it
      video.description = description;

      if (videoPath) {
        video.videoPath = videoPath;
      }

      await video.save();
      res.json({ message: 'Video updated successfully', video });
    } else {
      // If video doesn't exist, create a new one
      video = await VideoAccueil.create({
        
        videoPath,
      });

      res.json({ message: 'Video added successfully', video });
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

module.exports = router;