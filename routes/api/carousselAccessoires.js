const express = require('express');
const router = express.Router();
const path = require('path');
const CarousselAccessoires = require('../../models/CarousselAccessoires');
const upload = require('../../middleware/storage')
const adminauth = require('../../middleware/adminauth');



// Upload or update video
router.put('/', adminauth, upload.array('photos'), async (req, res) => {
  try {
    let carousselItem = await CarousselAccessoires.findOne();

    if (!carousselItem) {
      // If no carousel item exists, create a new one
      carousselItem = new CarousselAccessoires({
        text: req.body.text,
      });
    } else {
      // If carousel item exists, update its properties
      carousselItem.text = req.body.text;
    }

    if (req.files && req.files.length > 0) {
      carousselItem.photos = req.files.map(file => file.path);
    }

    await carousselItem.save();

    res.json(carousselItem);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.get('/', async (req, res) => {
  try {
    const caroussel = await CarousselAccessoires.findOne();

    if (!caroussel) {
      return res.status(404).json({ message: 'No photos found' });
    }

    res.json(caroussel);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
module.exports = router;