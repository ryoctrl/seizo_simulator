var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/seizo', (req, res, next) => {
	let jinriki = req.params.jinriki;
	let danyaku = req.params.danyaku;
	let haikyu = req.params.haikyu;
	let parts = req.params.parts;

	if (!jinriki || !danyaku || !haikyu || !parts) {
		res.json({
			"error": `製造用パラメータが足りない.`
		});
		return;
	}


	

});

module.exports = router;
