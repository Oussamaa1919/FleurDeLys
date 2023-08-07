const express = require('express');
const router = express.Router();
const path = require('path');
const VideoAccueil = require('../../models/VideoAccueil');
const upload = require('../../middleware/storage')
const adminauth = require('../../middleware/adminauth');



// Upload or update video
router.put('/', adminauth, upload.single('video'), async (req, res) => {
  try {
    let videoaccuiel = await VideoAccueil.findOne();

    if (!videoaccuiel) {
      // If no video exists, create a new one
      videoaccuiel = new VideoAccueil({
        text: req.body.text,
      });
    } else {
      // If video exists, update its properties
      videoaccuiel.text = req.body.text;
    }

    if (req.file) {
      videoaccuiel.video = req.file.path;
    }

    await videoaccuiel.save();

    res.json(videoaccuiel);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


module.exports = router;