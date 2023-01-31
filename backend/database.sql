USE dbdevhubproject;

DROP TABLE IF EXISTS user;
CREATE TABLE user (id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
firstname VARCHAR(60) NOT NULL,
lastname VARCHAR(60) NOT NULL,
email VARCHAR(255) NOT NULL,
phone VARCHAR(10),
user_image BLOB,
biography VARCHAR(255),
hashed_password VARCHAR(60),
github_page VARCHAR(140),
city VARCHAR(40)
) ENGINE=InnoDB;

DROP TABLE IF EXISTS project;
CREATE TABLE project (id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
name VARCHAR(80) NOT NULL,
state VARCHAR(255),
description TEXT NOT NULL,
project_start_date DATE NOT NULL,
project_end_date DATE NOT NULL,
progress INT,
project_manager VARCHAR(40) NOT NULL
) ENGINE=InnoDB;

DROP TABLE IF EXISTS task;
CREATE TABLE task (id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
name VARCHAR(255) NOT NULL,
task_start_date DATE NOT NULL,
task_end_date DATE NOT NULL,
description TEXT NOT NULL,
state VARCHAR(255),
progress INT,
type VARCHAR(255) NOT NULL,
user_id INT NOT NULL,
CONSTRAINT fk_task_user
  FOREIGN KEY (user_id) 
  REFERENCES user(id)
 ) ENGINE=InnoDB;

DROP TABLE IF EXISTS note ;
CREATE TABLE note (id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
desciption VARCHAR(300) NOT NULL,
user_id INT NOT NULL,
CONSTRAINT fk_note_user 
  FOREIGN KEY (user_id)
  REFERENCES user(id)
) ENGINE=InnoDB;

DROP TABLE IF EXISTS message ;
CREATE TABLE message (id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
title VARCHAR(255) NOT NULL,
content TEXT NOT NULL,
author VARCHAR(40) NOT NULL,
receiver VARCHAR(40) NOT NULL,
date_sent DATE NOT NULL,
state VARCHAR(255)
) ENGINE=InnoDB;

DROP TABLE IF EXISTS user_message ;
CREATE TABLE user_message (id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
user_id INT NOT NULL,
message_id INT NOT NULL,
FOREIGN KEY (user_id) REFERENCES user(id),
FOREIGN KEY (message_id) REFERENCES message(id)
) ENGINE=InnoDB;

DROP TABLE IF EXISTS task_project ;
CREATE TABLE task_project (id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
task_id INT NOT NULL,
project_id INT NOT NULL,
FOREIGN KEY (task_id) REFERENCES task(id),
FOREIGN KEY (project_id) REFERENCES project(id)
) ENGINE=InnoDB;

DROP TABLE IF EXISTS user_project ;
CREATE TABLE user_project (id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
user_id INT NOT NULL,
project_id INT NOT NULL,
FOREIGN KEY (user_id) REFERENCES user(id),
FOREIGN KEY (project_id) REFERENCES project(id)
) ENGINE=InnoDB;

USE dbdevhubproject;
-- Requête SQL USER
INSERT INTO user (firstname, lastname, email, phone, user_image, biography, hashed_password, github_page, city)
VALUES
('John', 'Doe', 'johndoe@email.com', '1234567890', NULL, 'A software developer', 'password123', 'johndoe', 'New York'),
('Jane', 'Doe', 'janedoe@email.com', '0987654321', NULL, 'A web designer', 'password456', 'janedoe', 'Los Angeles'),
('Bob', 'Smith', 'bobsmith@email.com', '5555555555', NULL, 'A data analyst', 'password789', 'bobsmith', 'Chicago'),
('Alice', 'Johnson', 'alicejohnson@email.com', '6666666666', NULL, 'A project manager', 'password111', 'alicejohnson', 'Houston'),
('Tom', 'Brown', 'tombrown@email.com', '7777777777', NULL, 'A software engineer', 'password222', 'tombrown', 'Phoenix'),
('Sophie', 'Davis', 'sophiedavis@email.com', '8888888888', NULL, 'A product manager', 'password333', 'sophiedavis', 'Philadelphia'),
('Michael', 'Wilson', 'michaelwilson@email.com', '9999999999', NULL, 'A DevOps engineer', 'password444', 'michaelwilson', 'San Francisco'),
('Emily', 'Taylor', 'emilytaylor@email.com', '0000000000', NULL, 'A UX designer', 'password555', 'emilytaylor', 'Seattle'),
('William', 'Lee', 'williamlee@email.com', '1111111111', NULL, 'A QA engineer', 'password666', 'williamlee', 'Austin'),
('Olivia', 'Parker', 'oliviaparker@email.com', '2222222222', NULL, 'A technical writer', 'password777', 'oliviaparker', 'Boston');

-- Requête SQL project
INSERT INTO project (name, state, description, project_start_date, project_end_date, progress, project_manager) VALUES ('Project A', 'Ongoing', 'A software development project', '2022-01-01', '2022-12-31', 50, 'John Doe'),('Project B', 'Completed', 'A web design project', '2022-01-01', '2022-06-30', 100, 'Jane Doe'),('Project C', 'Ongoing', 'A data analysis project', '2022-07-01', '2022-12-31', 75, 'Bob Smith'),('Project D', 'Not Started', 'A project management project', '2023-01-01', '2023-06-30', 0, 'Alice Johnson'),('Project E', 'Ongoing', 'A software engineering project', '2022-07-01', '2022-12-31', 60, 'Tom Brown'),('Project F', 'Not Started', 'A product management project', '2023-01-01', '2023-06-30', 0, 'Sophie Davis'),('Project G', 'Ongoing', 'A DevOps engineering project', '2022-01-01', '2022-12-31', 80, 'Michael Wilson'),('Project H', 'Completed', 'A UX design project', '2022-01-01', '2022-06-30', 100, 'Emily Taylor'),('Project I', 'Ongoing', 'A QA engineering project', '2022-07-01', '2022-12-31', 70, 'William Lee'),('Project J', 'Not Started', 'A technical writing project', '2023-01-01', '2023-06-30', 0, 'Olivia Parker');