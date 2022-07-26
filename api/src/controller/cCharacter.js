const axios = require('axios');
const { Character, Episode } = require('../db');

const getCharacters = async () => {
	try {
		const api = await axios.get(' https://rickandmortyapi.com/api/character');
		const characters = api.data.results.map((cha) => {
			return {
				id: cha.id,
				name: cha.name,
				species: cha.species,
				origin: cha.origin.name,
				image: cha.image,
				episode: cha.episode.map((e) => e),
			};
		});
		return characters;
	} catch (error) {
		console.log(error);
	}
};

module.exports = {
	getCharacters,
};
