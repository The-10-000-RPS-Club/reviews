

DROP TABLE IF EXISTS reviews;


CREATE TABLE reviews (
  product_id INTEGER NOT NULL,
  id INTEGER NOT NULL PRIMARY KEY,
  nickname VARCHAR,
  rating INTEGER,
  title VARCHAR,
  created_at VARCHAR,
  body TEXT,
  fit VARCHAR,
  age INTEGER,
  height VARCHAR,
  weight VARCHAR,
  location VARCHAR,
  email VARCHAR,
  helpful_yes INTEGER,
  helpful_no INTEGER,
);

-- CREATE TABLE images (
--   id INTEGER NOT NULL PRIMARY KEY,
--   url VARCHAR,
--   description VARCHAR
-- );
