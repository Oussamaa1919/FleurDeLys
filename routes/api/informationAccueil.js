const express = require('express');
const router = express.Router();
const path = require('path');
const InformationAccueil = require('../../models/InformationAccueil');
const upload = require('../../middleware/storage')
const adminauth = require('../../middleware/adminauth');
const { check, validationResult } = require('express-validator');




// Upload or update video
router.put('/', adminauth,
 upload.single('video'),
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
      // If no video exists, create a new one
      informationacceuil = new InformationAccueil({
        description: req.body.description,
        titreactualités: req.body.titreactualités,
        actualités: req.body.actualités,

      });
    } else {
      // If video exists, update its properties
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


module.exports = router;