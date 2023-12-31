const express = require('express');
const router = express.Router();
const path = require('path');
const InformationAccueil = require('../../models/InformationAccueil');
const upload = require('../../middleware/storage')
const adminauth = require('../../middleware/adminauth');
const { check, validationResult } = require('express-validator');




router.put('/', adminauth,
 
 check('description', 'Description is required').notEmpty(),
  check('titreactualités', 'Titre actualités is required').notEmpty(),
  check('actualités', 'Actualités is required').notEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  try {
    let informationacceuil = await InformationAccueil.findOne();

    if (!informationacceuil) {
      
      informationacceuil = new InformationAccueil({
        description: req.body.description,
        titreactualités: req.body.titreactualités,
        actualités: req.body.actualités,

      });
    } else {
      
      informationacceuil.description = req.body.description;
      informationacceuil.titreactualités = req.body.titreactualités;
      informationacceuil.actualités = req.body.actualités;

    }

    

    await informationacceuil.save();

    res.json(informationacceuil);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.get('/', async (req, res) => {
  try {
    const informationacceuil = await InformationAccueil.findOne();

    if (!informationacceuil) {
      return res.status(404).json({ message: 'No information found' });
    }

    res.json(informationacceuil);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;

