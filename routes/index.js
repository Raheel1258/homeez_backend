const express = require('express');

const informationRoutes = require('./information.routes');

const router = express.Router();    

router.use('/information', informationRoutes);

module.exports = router;