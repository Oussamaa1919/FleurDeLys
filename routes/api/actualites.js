const express = require('express');
const router = express.Router();
const path = require('path');
const Actualites = require('../../models/Actualites');
const upload = require('../../middleware/storage')
const adminauth = require('../../middleware/adminauth');
const { check, validationResult } = require('express-validator');




router.put('/', adminauth,
 
 
  check('titre', 'Titre is required').notEmpty(),
  check('text', 'text is required').notEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  try {
    let actualites = await Actualites.findOne();

    if (!actualites) {
      
      actualites = new Actualites({
        titre: req.body.titre,
        text: req.body.text,

      });
    } else {
      
      actualites.titre = req.body.titre;
      actualites.text = req.body.text;

    }

    

    await actualites.save();

    res.json(actualites);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.get('/', async (req, res) => {
  try {
    const actualites = await Actualites.findOne();

    if (!actualites) {
      return res.status(404).json({ message: 'No actualites found' });
    }

    res.json(actualites);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;

