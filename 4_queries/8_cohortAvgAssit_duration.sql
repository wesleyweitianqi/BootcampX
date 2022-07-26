SELECT sum(completed_at - started_at)/(
  SELECT count(DISTINCT cohorts.id) FROM cohorts 
  JOIN students ON cohorts.id = students.cohort_id
)as average_total_duration
FROM assistance_requests
JOIN students ON students.id = assistance_requests.student_id
JOIN cohorts ON cohorts.id = students.cohort_id;