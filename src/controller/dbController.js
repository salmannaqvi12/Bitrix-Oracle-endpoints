const {
    fetchStudentsData,
    fetchParentsData,
    fetchClassSubjectsData,
    fetchSubjectsData,
    fetchBranchesData,
    fetchClassesData,
    fetchStdGroupsData,
    fetchTchrGroupsData,
  } = require("../db");
  
  //Get Students Data
  const getStudents = (req, res) => {
    //   db.execute(`select * from xyz`);
    fetchStudentsData()
      .then((data) => {
        res.send(data.rows);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  //Fetch Parents Data
  const getParents = (req, res) => {
    fetchParentsData()
      .then((data) => {
        res.send(data.rows);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  //Fetch class Subjects Data
  const getClassSubjects = (req, res) => {
    fetchClassSubjectsData()
      .then((data) => {
        res.send(data.rows);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  //Fetch Subjects Data
  const getSubjects = (req, res) => {
    fetchSubjectsData()
      .then((data) => {
        res.send(data.rows);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  //Fetch Branches Data
  const getBranches = (req, res) => {
    fetchBranchesData()
      .then((data) => {
        res.send(data.rows);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  //Fetch classes Data
  const getClasses = (req, res) => {
    fetchClassesData()
      .then((data) => {
        res.send(data.rows);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  //Fetch Std-Groups Data
  const getStdGroups = (req, res) => {
    fetchStdGroupsData()
      .then((data) => {
        res.send(data.rows);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  //Fetch tchr-Groups Data
  const getTchrGroups = (req, res) => {
    fetchTchrGroupsData()
      .then((data) => {
        res.send(data.rows);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  module.exports = {
    getStudents,
    getParents,
    getClassSubjects,
    getSubjects,
    getBranches,
    getClasses,
    getStdGroups,
    getTchrGroups,
  };
  