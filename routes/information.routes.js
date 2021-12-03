const express = require('express');
const { createQuote, getAllQuotes, searchQuote } = require('../controllers/information.controller');
const router = express.Router();

router.route('/create').post(createQuote);
router.route('/all').get(getAllQuotes);
router.route('/find').get(searchQuote);

module.exports = router;