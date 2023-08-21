const oracledb = require("oracledb");
require("dotenv").config();


//Fetch Students Data
async function fetchStudentsData() {
  try {
    const connection = await oracledb.getConnection({
      user: process.env.USER_NAME,
      password: process.env.PASSWORD,
      connectString: process.env.HOST_NAME,
    });

    const result = await connection.execute(
      "SELECT * FROM BSSDATA.V_BIC_STUDENTS"
    );

    return result;
  } catch (error) {
    return error;
  }
}
//Fetch Parents Data
async function fetchParentsData() {
  try {
    const connection = await oracledb.getConnection({
      user: process.env.USER_NAME,
      password: process.env.PASSWORD,
      connectString: process.env.HOST_NAME,
    });

    const result = await connection.execute(
      "SELECT * FROM BSSDATA.V_BIC_PARENTS"
    );

    return result;
  } catch (error) {
    return error;
  }
}

//Fetch Class-Subjects Data
async function fetchClassSubjectsData() {
  try {
    const connection = await oracledb.getConnection({
      user: process.env.USER_NAME,
      password: process.env.PASSWORD,
      connectString: process.env.HOST_NAME,
    });

    const result = await connection.execute(
      "SELECT * FROM BSSDATA.V_BIC_CLASS_SUBJECTS"
    );

    return result;
  } catch (error) {
    return error;
  }
}

//Fetch Subjects Data
async function fetchSubjectsData() {
  try {
    const connection = await oracledb.getConnection({
      user: process.env.USER_NAME,
      password: process.env.PASSWORD,
      connectString: process.env.HOST_NAME,
    });

    const result = await connection.execute(
      "SELECT * FROM BSSDATA.V_BIC_SUBJECTS"
    );

    return result;
  } catch (error) {
    return error;
  }
}

//Fetch Branches Data
async function fetchBranchesData() {
  try {
    const connection = await oracledb.getConnection({
      user: process.env.USER_NAME,
      password: process.env.PASSWORD,
      connectString: process.env.HOST_NAME,
    });

    const result = await connection.execute(
      "SELECT * FROM BSSDATA.V_BIC_BRANCHES"
    );

    return result;
  } catch (error) {
    return error;
  }
}

//Fetch Classes Data
async function fetchClassesData() {
  try {
    const connection = await oracledb.getConnection({
      user: process.env.USER_NAME,
      password: process.env.PASSWORD,
      connectString: process.env.HOST_NAME,
    });

    const result = await connection.execute(
      "SELECT * FROM BSSDATA.V_BIC_CLASSES"
    );

    return result;
  } catch (error) {
    return error;
  }
}

//Fetch std-groups Data
async function fetchStdGroupsData() {
  try {
    const connection = await oracledb.getConnection({
      user: process.env.USER_NAME,
      password: process.env.PASSWORD,
      connectString: process.env.HOST_NAME,
    });

    const result = await connection.execute(
      "SELECT * FROM BSSDATA.V_BIC_STD_GROUPS"
    );

    return result;
  } catch (error) {
    return error;
  }
}

//Fetch tchr-groups Data
async function fetchTchrGroupsData() {
  try {
    const connection = await oracledb.getConnection({
      user: process.env.USER_NAME,
      password: process.env.PASSWORD,
      connectString: process.env.HOST_NAME,
    });

    const result = await connection.execute(
      "SELECT * FROM BSSDATA.V_BIC_TCHR_GROUPS"
    );

    return result;
  } catch (error) {
    return error;
  }
}

module.exports = {
  fetchStudentsData,
  fetchParentsData,
  fetchClassSubjectsData,
  fetchSubjectsData,
  fetchBranchesData,
  fetchClassesData,
  fetchStdGroupsData,
  fetchTchrGroupsData,
};
