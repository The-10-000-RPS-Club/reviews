

DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS images;

CREATE TABLE reviews (
  product_id INTEGER NOT NULL,
  id INTEGER NOT NULL PRIMARY KEY,
  nickname VARCHAR,
);

-- CREATE TABLE images (
--   id INTEGER NOT NULL PRIMARY KEY,
--   url VARCHAR,
--   description VARCHAR
-- );
