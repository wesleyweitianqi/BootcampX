SELECT cohorts.name AS cohort_name, count(*) as student_count
FROM students 
JOIN cohorts ON cohorts.id  = students.cohort_id
GROUP BY cohort_name
HAVING count(*) >=18
ORDER BY count(*);