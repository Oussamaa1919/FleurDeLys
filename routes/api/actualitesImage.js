const express = require('express');
const router = express.Router();
const path = require('path');
const ActualitesImage = require('../../models/ActualitesImage');
const upload = require('../../middleware/storage')
const adminauth = require('../../middleware/adminauth');



// Upload or update video
router.put('/', adminauth, upload.single('photo'), async (req, res) => {
  try {
    let image = await ActualitesImage.findOne();

    if (!image) {
      // If no video exists, create a new one
      image = new ActualitesImage({
        text: req.body.text,
      });
    } else {
      // If video exists, update its properties
      image.text = req.body.text;
    }

    if (req.file) {
      image.photo = req.file.path;
    }

    await image.save();

    res.json(image);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
router.get('/', async (req, res) => {
  try {
    const image = await ActualitesImage.findOne();

    if (!image) {
      return res.status(404).json({ message: 'No photo found' });
    }

    res.json(image);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;