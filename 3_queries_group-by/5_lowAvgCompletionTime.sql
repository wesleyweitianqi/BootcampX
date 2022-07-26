SELECT students.name, avg(assignment_submissions.duration) as average_assignment_duration, avg(assignments.duration) as average_estimated_duration
FROM students
JOIN assignment_submissions ON assignment_submissions.student_id = students.id
JOIN assignments ON assignment_submissions.assignment_id = assignments.id
WHERE end_date IS NULL 
GROUP BY students.name
HAVING  avg(assignment_submissions.duration) < avg(assignments.duration)
ORDER BY average_assignment_duration;
