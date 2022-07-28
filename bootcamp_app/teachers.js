const {Pool} = require('pg');

const pool = new Pool (
  {
    user: 'tianqiwei',
    password: '123',
    host:'localhost',
    database:'bootcampx'
  }
);

pool.query( `SELECT 
teachers.name as teacher,
cohorts.name as cohort,
count(completed_at) as total_assistances
FROM teachers
JOIN assistance_requests ON teachers.id = assistance_requests.teacher_id
JOIN students ON students.id = assistance_requests.student_id
JOIN cohorts ON cohorts.id = students.cohort_id
WHERE cohorts.name LIKE '%${process.argv[2]}%'
GROUP BY teacher, cohort
ORDER BY teacher;`)
  .then(res => res.rows.forEach((data) => {
    console.log(`${data.cohort}: ${data.teacher}`)
  }));

 
