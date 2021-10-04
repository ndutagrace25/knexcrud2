const express = require('express');

const router = express.Router();

const queries = require('../db/queries');
const isValidId = require('../utils/idValidator');
const validSticker = require('../utils/stickerValidator');


router.get('/', (req, res) => {
  const { title } = req.query;
  queries.getAll({ title }).then(stickers => {
    res.json(stickers);
  })
  // res.send('It worked!!')
})

router.get('/:id', isValidId, (req, res, next) => {
  queries.getOne(req.params.id).then(sticker => {
    if (sticker) {
      res.json(sticker)
    } else {
      next(new Error('Sticker not found'))
    }
  })
})

router.post('/', (req, res, next) => {
  if (validSticker(req.body)) {
    queries.create(req.body).then(sticker => {
      res.json(sticker[0])
    })
  } else {
    next(new Error('Invlid sticker'))
  }
})

router.put('/:id', isValidId, (req, res, next) => {
  if (validSticker(req.body)) {
    queries.update(req.params.id, req.body).then(sticker => {
      res.json(sticker[0])
    })
  } else {
    next(new Error('Invalid Sticker'))
  }
})

router.delete('/:id', isValidId, (req, res) => {
  queries.delete(req.params.id).then(() => {
    res.json({
      deleted: true
    })
  })
})


module.exports = router;