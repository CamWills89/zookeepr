const router = require('express').Router();
//there is careful use of relative paths. Always check this this when we have nested files.
const animalRoutes = require('../apiRoutes/animalRoutes');

router.use(animalRoutes);
router.use(require('./zookeeperRoutes'));

module.exports = router;