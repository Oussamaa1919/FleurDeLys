const express = require('express');
const router = express.Router();
const path = require('path');
const Formations = require('../../models/Formations');
const upload = require('../../middleware/storage')
const adminauth = require('../../middleware/adminauth');
const { check, validationResult } = require('express-validator');




router.put('/', adminauth,
 
 check('description', 'Description is required').notEmpty(),
  
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  try {
    let formations = await Formations.findOne();

    if (!formations) {
      
      formations = new Formations({
        description: req.body.description,
        

      });
    } else {
      
      formations.description = req.body.description;
      

    }

    

    await formations.save();

    res.json(formations);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.get('/', async (req, res) => {
  try {
    const formations = await Formations.findOne();

    if (!formations) {
      return res.status(404).json({ message: 'No formation found' });
    }

    res.json(formations);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;

