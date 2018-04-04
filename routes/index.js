let express = require('express');
let router = express.Router();

/* GET home page. */

let problem_solving_controller = require("../controllers/problem-solving-controller");

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods"," GET, PUT, POST, DELETE, HEAD");
    next();
});


router.get('/:subject', function(req, res) {
    problem_solving_controller.fetch_problem_solving_problems(req, res);
});


router.get('/:subject/:topic', function (req, res) {
    problem_solving_controller.fetch_problem_solving_topics(req, res);
});

router.post('/:subject/:topic', function (req, res) {
    problem_solving_controller.post_problem_solving_problems(req, res);
});

router.get('/:subject/:topic/:name', function (req, res) {
    problem_solving_controller.fetch_problem_solving_description(req, res);
});


module.exports = router;
