const router = require('express').Router();

const Bear = require('./bearModel.js');

router
  .route('/')
  .get((req, res) => {
    Bear.find({})
      .then(bears => {
        res.status(200).json(bears);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  })
  .post((req, res) => {
    const bear = new Bear(req.body);
    bear
      .save()
      .then(savedBear => res.json(savedBear))
      .catch(error => {
        res.status(500).json(error);
      });
  });

router
  .route('/:id')
  .get((req, res) => {
    Bear.findById(req.params.id)
      .then(bears => {
        res.status(200).json(bears);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  })
  .delete((req, res) => {
    res.status(200).json({ status: 'please implement DELETE functionality' });
  })
  .put((req, res) => {
    res.status(200).json({ status: 'please implement PUT functionality' });
  });

module.exports = router;
