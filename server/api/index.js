// api/index.js
const router = require('express').Router();

router.use('/craze10', require('./craze10')); // matches all requests to /api/users/
router.use('/sketchalong', require('./sketchalong')); // matches all requests to /api/users/
router.use('/users', require('./users')); // matches all requests to /api/users/


module.exports = router;
