const {Pool} = require('pg');

const pool = new Pool (
  {
    user: 'tianqiwei',
    password: '123',
    host:'localhost',
    database:'bootcampx'
  }
);
const val = process.argv.slice(2);
console.log(val);
pool.query(`SELECT students.id as studentId, students.name as studentName, cohorts.name as cohort FROM students JOIN cohorts ON cohorts.id = students.cohort_id WHERE cohorts.name LIKE '${val[0]}%' LIMIT ${val[1]};`)
      .then(res=> {
        res.rows.forEach(arr =>{
          console.log(`${arr.studentname} has an id of ${arr.studentid} and was in the ${arr.cohort} cohort`)
        });
      }).catch(error=>console.error(`query error`, err.stack));

module.exports = { pool };