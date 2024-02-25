const express = require("express");
const router  = express.Router();

// import all controller 
const {getGoals ,setGoal , updateGoal , deleteGoal} = require("../controller/goalController")
router.route("/").get(getGoals).post(setGoal);
router.route("/:id").put(updateGoal).delete(deleteGoal);

module.exports = router;