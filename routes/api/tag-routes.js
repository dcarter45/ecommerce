const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  tag.findAll().then((tagData) => {
    res.json(tagData);
  });
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  tag.findOne({
    where: { 
      id: req.params.id 
    },
  })
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((Tag) => {
      // find all associated tags from ProductTag
      return tag.findAll({ where: { tag_id: req.params.id } });
    })
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  tag.create(req.body)
  .then((newTag) => {
    res.json(newTag);
  })
  .catch((err) => {

    res.json(err);
  });
});

module.exports = router;