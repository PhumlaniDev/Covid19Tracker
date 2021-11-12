const express = require("express");
const https = require("https");
const bodyParse = require("body-parser");
const router = express.Router();

router.get("/", (req, res) => {
	const query = req.body.country_query;

	const url = `https://api.covid19api.com/summary`;
	const searchCountry = `https://api.covid19api.com/total/dayone/country/:${query}`;

	// https.get(searchCountry, (response) => {
	// 	response.on("data", (data) => {
	// 		const covidData = JSON.parse(data);

	// 		res.render("index", { Data: covidData });
	// 	});
	// });

	https.get(url, (response) => {
		let data = "";

		response.on("data", (chunks) => {
			data += chunks;
		});

		response.on("end", () => {
			const covidData = JSON.parse(data);

			res.render("index", { Data: covidData });
		});
	});
});

module.exports = router;
