const {Pool} = require('pg');

const pool = new Pool (
  {
    user: 'tianqiwei',
    password: '123',
    host:'localhost',
    database:'bootcampx'
  }
);

const cohortName = process.argv[2];
const limit = process.argv[3] || 5;
const query = {
  text: `SELECT students.id as studentid, students.name as studentname, cohorts.name as cohort FROM students JOIN cohorts ON cohorts.id = students.cohort_id WHERE cohorts.name = $1 LIMIT $2;`,
  values: [`%${cohortName}%`, limit]
}
console.log(query)
pool.query(query.text, query.values)
      .then(res=> {
        res.rows.forEach(arr =>{
          console.log(`${arr.studentname} has an id of ${arr.studentid} and was in the ${arr.cohort} cohort`)
        });
      }).catch(error=>console.error(`query error`, err.stack));

