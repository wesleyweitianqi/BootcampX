SELECT day, count(assignments.id) as total_assignments
FROM assignments
GROUP BY day having count(assignments.id) >= 10
ORDER BY day;