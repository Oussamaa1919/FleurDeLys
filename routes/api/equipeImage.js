const express = require('express');
const router = express.Router();
const path = require('path');
const EquipeImage = require('../../models/EquipeImage');
const upload = require('../../middleware/storage')
const adminauth = require('../../middleware/adminauth');



// Upload or update video
router.put('/', adminauth, upload.single('photo'), async (req, res) => {
  try {
    let equipeimage = await EquipeImage.findOne();

    if (!equipeimage) {
      // If no video exists, create a new one
      equipeimage = new EquipeImage({
        text: req.body.text,
      });
    } else {
      // If video exists, update its properties
      equipeimage.text = req.body.text;
    }

    if (req.file) {
      equipeimage.photo = req.file.path;
    }

    await equipeimage.save();

    res.json(equipeimage);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
router.get('/', async (req, res) => {
  try {
    const equipeimage = await EquipeImage.findOne();

    if (!equipeimage) {
      return res.status(404).json({ message: 'No photo found' });
    }

    res.json(equipeimage);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;