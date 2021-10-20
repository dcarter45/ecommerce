const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  // maybe specify on
  Tag.findAll({include:Product}).then((tagData) => {
    res.json(tagData);
  });
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findByPk(req.params.id,{
    include: [{model:Product, through: ProductTag}],
    }).then((tag)=>{
      res.json(tag)
    })

    
  })

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body)
  .then((newTagRoute) => {
    res.json(newTagRoute);
  })
  .catch((err) => {
    res.json(err);
  });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((Tag) => {
      
      return Tag.findAll({ where: { tag_id: req.params.id } });
    }).catch((err) => {
      // console.log(err);
      res.status(400).json(err);
    });
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
  .then((newTag) => {
    res.json(newTag);
  })
  .catch((err) => {

    res.json(err);
  });
});

module.exports = router;
