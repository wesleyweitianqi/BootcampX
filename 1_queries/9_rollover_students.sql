SELECT students.name as student_name, cohorts.name as cohort_name, students.start_date as student_start_date, cohorts.start_date as cohort_start_day
FROM students JOIN cohorts ON students.id = cohorts.id
WHERE students.start_date != cohorts.start_date
ORDER BY cohorts.start_date;
