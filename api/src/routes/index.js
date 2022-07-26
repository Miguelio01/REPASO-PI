const { Router } = require('express');

const characterRouter = require('./middlewares/Character');
const episodeRouter = require('./middlewares/Episode');

const router = Router();

// Configurar los routers

router.use('/character', characterRouter);
router.use('episode', episodeRouter);

module.exports = router;
