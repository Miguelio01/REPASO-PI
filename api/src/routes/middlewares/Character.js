const { Router } = require('express');

const { getCharacters } = require('../../controller/cCharacter');

const router = Router();

router.get('/', (req, res) => {
	res.status(200).json(getCharacters);
});
