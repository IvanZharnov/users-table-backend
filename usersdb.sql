CREATE TABLE users (
  id               SERIAL PRIMARY KEY,
  first_name       varchar(40) NOT NULL,
  last_name        varchar(40) NOT NULL
);

INSERT INTO users (first_name, last_name)
VALUES
('James', 'Smith'),
('John', 'Johnson'),
('Robert', 'Williams'),
('Michael', 'Jones'),
('William', 'Brown'),
('David', 'Davis'),
('Richard', 'Miller'),
('Charles', 'Wilson');
