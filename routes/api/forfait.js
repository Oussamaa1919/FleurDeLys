
const express = require('express');
const router = express.Router();
const path = require('path');
const Forfait = require('../../models/Forfait');
const upload = require('../../middleware/storage')
const adminauth = require('../../middleware/adminauth');
const { check, validationResult } = require('express-validator');
const checkObjectId = require('../../middleware/checkObjectId');





// Upload or update video
router.post('/', adminauth, upload.single('photo'),
check('titre', 'Titre is required').notEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {

      const newForfait = new Forfait({
        titre: req.body.titre,
        
      });

      if (req.file) {
        newForfait.photo = req.file.path;
      }

      const forfait = await newForfait.save();

      res.json(forfait);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);
router.get('/',  async (req, res) => {
  try {
    const forfaits = await Forfait.find().sort({ date: -1 });
    res.json(forfaits);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
router.delete('/:id', [adminauth, checkObjectId('id')], async (req, res) => {
  try {
    const deletedForfait = await Forfait.findByIdAndDelete(req.params.id);
    if (!deletedForfait) {
      return res.status(404).json({ message: 'Forfait not found' });
    }
    res.json({ message: 'Forfait supprimé' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});
module.exports = router;