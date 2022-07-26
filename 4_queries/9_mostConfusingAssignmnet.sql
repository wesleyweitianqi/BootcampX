SELECT id, day, name, chapter, total_request
FROM assignments
JOIN (SELECT assignment_id, count(assignment_id) as total_request
FROM assistance_requests
JOIN assignments ON assignments.id = assistance_requests.assignment_id
GROUP BY assistance_requests.assignment_id) as total_request_table 
ON total_request_table.assignment_id = assignments.id
ORDER BY total_request DESC;




