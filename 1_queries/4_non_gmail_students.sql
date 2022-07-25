SELECT name, email, id, cohort_id
FROM students 
WHERE NOT (email like '%gamil.com') AND phone IS NULL;