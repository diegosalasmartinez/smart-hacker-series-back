const express = require('express')
const { getProfile } = require('../controllers/ProfileController')

const router = express.Router();

router.get('/:url', getProfile);

module.exports = router
