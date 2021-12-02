const express = require('express');
const { createQuote, getAllQuotes } = require('../controllers/information.controller');
const router = express.Router();

router.route('/create').post(createQuote);
router.route('/all').get(getAllQuotes);

module.exports = router;