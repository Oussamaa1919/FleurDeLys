const express = require('express');
const router = express.Router();
const path = require('path');
const CardFormation = require('../../models/CardFormation');
const upload = require('../../middleware/storage')
const adminauth = require('../../middleware/adminauth');



// Upload or update video
router.put('/', adminauth, upload.single('photo'), async (req, res) => {
  try {
    let cardformation = await CardFormation.findOne();

    if (!cardformation) {
      // If no video exists, create a new one
      cardformation = new CardFormation({
        text: req.body.text,
      });
    } else {
      // If video exists, update its properties
      cardformation.text = req.body.text;
    }

    if (req.file) {
      cardformation.photo = req.file.path;
    }

    await cardformation.save();

    res.json(cardformation);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
router.get('/', async (req, res) => {
  try {
    const cardformation = await CardFormation.findOne();

    if (!cardformation) {
      return res.status(404).json({ message: 'No photo found' });
    }

    res.json(cardformation);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;