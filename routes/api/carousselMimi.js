const express = require('express');
const router = express.Router();
const path = require('path');
const CarousselMimi = require('../../models/CarousselMimi');
const upload = require('../../middleware/storage')
const adminauth = require('../../middleware/adminauth');



// Upload or update video
router.put('/', adminauth, upload.array('photos'), async (req, res) => {
  try {
    let carousselItem = await CarousselMimi.findOne();

    if (!carousselItem) {
      // If no carousel item exists, create a new one
      carousselItem = new CarousselMimi({
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
    const carousselmimi = await CarousselMimi.findOne();

    if (!carousselmimi) {
      return res.status(404).json({ message: 'No photos found' });
    }

    res.json(carousselmimi);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
module.exports = router;