const { Welcome, LearnerSignUp, SignIn  } = require("../controllers/auth-controller.js");
const router = require("express").Router();

router.get('/', Welcome);
router.post('/learner-signup', LearnerSignUp);
router.post('/signin', SignIn);

module.exports = router;