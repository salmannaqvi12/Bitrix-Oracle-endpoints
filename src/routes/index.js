var express = require("express");
const {
  getStudents,
  getParents,
  getClassSubjects,
  getSubjects,
  getBranches,
  getClasses,
  getStdGroups,
  getTchrGroups,
} = require("../controller");
var router = express.Router();

/* GET Students.*/
router.get("/students", getStudents);

/* GET Parents.*/
router.get("/parents", getParents);

/* GET Class-Subjects.*/
router.get("/classsubjects", getClassSubjects);

/* GET Subjects.*/
router.get("/subjects", getSubjects);

/* GET Branches.*/
router.get("/branches", getBranches);

/* GET Classes.*/
router.get("/classes", getClasses);

/* GET std-groups.*/
router.get("/stdgroups", getStdGroups);

/* GET Classes.*/
router.get("/tchrgroups", getTchrGroups);

module.exports = router;
