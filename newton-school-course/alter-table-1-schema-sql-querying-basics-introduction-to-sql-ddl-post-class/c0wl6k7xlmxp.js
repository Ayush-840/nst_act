-- Rename the column 

-- Display all records from the table
-- Rename the column
ALTER TABLE songs RENAME COLUMN cover_pic TO album_cover;
SELECT * FROM songs;