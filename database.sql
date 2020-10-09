-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "item" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR (80) NOT NULL,
    "image_url" VARCHAR (2083),
    "user_id" INT REFERENCES "user"
);

INSERT INTO "user" ("username", "password")
VALUES ('Hugh Manatee', '817bubbles'),
	('Mr. Krabs', 'mefirstdoller55');
	
INSERT INTO "item" ("description", "image_url", "user_id")
VALUES
('Toothbrush', 'https://www.dollargeneral.com/media/catalog/product/cache/0729a8e318a86bbdd225c6c8aa5967a3/c/o/colgate_035000556776_01_1.jpg', '1'),
('Comb', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmW7zH624FulSFIMH1CL7y-HDcAF2gUQHwFw&usqp=CAU', '1'),
('Toys', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRh_UHKZGKcn6-1S307ezSg3hnQ6o7ohdUdhw&usqp=CAU', '2'),
('Shoes', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJXv_pf5CDr2hyxAO25ybxpwOB3Ni_Q1BB5w&usqp=CAU', '2');