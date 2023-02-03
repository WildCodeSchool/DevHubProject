-- npm run migrate
USE dbdevhubproject;

DROP TABLE IF EXISTS user;

CREATE TABLE
  user (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    firstname VARCHAR(60) NOT NULL,
    lastname VARCHAR(60) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(10),
    user_image BLOB,
    biography VARCHAR(255),
    hashed_password VARCHAR(60),
    github_page VARCHAR(140),
    city VARCHAR(40)
  ) ENGINE = InnoDB;

DROP TABLE IF EXISTS project;

CREATE TABLE
  project (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(80) NOT NULL,
    state VARCHAR(255),
    description TEXT NOT NULL,
    project_start_date DATE NOT NULL,
    project_end_date DATE NOT NULL,
    progress INT,
    project_manager VARCHAR(40) NOT NULL
  ) ENGINE = InnoDB;

DROP TABLE IF EXISTS task;

CREATE TABLE
  task (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NOT NULL,
    task_start_date DATE NOT NULL,
    task_end_date DATE NOT NULL,
    description TEXT NOT NULL,
    state VARCHAR(255),
    progress INT,
    type VARCHAR(255) NOT NULL,
    user_id INT NOT NULL,
    CONSTRAINT fk_task_user FOREIGN KEY (user_id) REFERENCES user (id)
  ) ENGINE = InnoDB;

DROP TABLE IF EXISTS note;

CREATE TABLE
  note (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    desciption VARCHAR(300) NOT NULL,
    user_id INT NOT NULL,
    CONSTRAINT fk_note_user FOREIGN KEY (user_id) REFERENCES user (id)
  ) ENGINE = InnoDB;

DROP TABLE IF EXISTS message;

CREATE TABLE
  message (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    author VARCHAR(40) NOT NULL,
    receiver VARCHAR(40) NOT NULL,
    date_sent DATE NOT NULL,
    state VARCHAR(255)
  ) ENGINE = InnoDB;

DROP TABLE IF EXISTS user_message;

CREATE TABLE
  user_message (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    user_id INT NOT NULL,
    message_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE,
    FOREIGN KEY (message_id) REFERENCES message (id) ON DELETE CASCADE
  ) ENGINE = InnoDB;

DROP TABLE IF EXISTS task_project;

CREATE TABLE
  task_project (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    task_id INT NOT NULL,
    project_id INT NOT NULL,
    FOREIGN KEY (task_id) REFERENCES task (id) ON DELETE CASCADE,
    FOREIGN KEY (project_id) REFERENCES project (id) ON DELETE CASCADE
  ) ENGINE = InnoDB;

DROP TABLE IF EXISTS user_project;

CREATE TABLE
  user_project (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    user_id INT NOT NULL,
    project_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE,
    FOREIGN KEY (project_id) REFERENCES project (id) ON DELETE CASCADE
  ) ENGINE = InnoDB;

USE dbdevhubproject;

-- Query SQL USER
INSERT INTO
  user (
    firstname,
    lastname,
    email,
    phone,
    user_image,
    biography,
    hashed_password,
    github_page,
    city
  )
VALUES
  (
    'John',
    'Doe',
    'johndoe@email.com',
    '1234567890',
    NULL,
    'A software developer',
    'password123',
    'johndoe',
    'New York'
  ),
  (
    'Jane',
    'Doe',
    'janedoe@email.com',
    '0987654321',
    NULL,
    'A web designer',
    'password456',
    'janedoe',
    'Los Angeles'
  ),
  (
    'Bob',
    'Smith',
    'bobsmith@email.com',
    '5555555555',
    NULL,
    'A data analyst',
    'password789',
    'bobsmith',
    'Chicago'
  ),
  (
    'Alice',
    'Johnson',
    'alicejohnson@email.com',
    '6666666666',
    NULL,
    'A project manager',
    'password111',
    'alicejohnson',
    'Houston'
  ),
  (
    'Tom',
    'Brown',
    'tombrown@email.com',
    '7777777777',
    NULL,
    'A software engineer',
    'password222',
    'tombrown',
    'Phoenix'
  ),
  (
    'Sophie',
    'Davis',
    'sophiedavis@email.com',
    '8888888888',
    NULL,
    'A product manager',
    'password333',
    'sophiedavis',
    'Philadelphia'
  ),
  (
    'Michael',
    'Wilson',
    'michaelwilson@email.com',
    '9999999999',
    NULL,
    'A DevOps engineer',
    'password444',
    'michaelwilson',
    'San Francisco'
  ),
  (
    'Emily',
    'Taylor',
    'emilytaylor@email.com',
    '0000000000',
    NULL,
    'A UX designer',
    'password555',
    'emilytaylor',
    'Seattle'
  ),
  (
    'William',
    'Lee',
    'williamlee@email.com',
    '1111111111',
    NULL,
    'A QA engineer',
    'password666',
    'williamlee',
    'Austin'
  ),
  (
    'Olivia',
    'Parker',
    'oliviaparker@email.com',
    '2222222222',
    NULL,
    'A technical writer',
    'password777',
    'oliviaparker',
    'Boston'
  ),
  (
    'Jean',
    'Dupont',
    'jeandupont@email.fr',
    '1234567890',
    NULL,
    'Un développeur logiciel',
    'motdepasse123',
    'jeandupont',
    'Paris'
  ),
  (
    'Jacques',
    'Martin',
    'jacquesmartin@email.fr',
    '0987654321',
    NULL,
    'Un concepteur web',
    'motdepasse456',
    'jacquesmartin',
    'Lyon'
  ),
  (
    'Robert',
    'Durand',
    'robertdurand@email.fr',
    '5555555555',
    NULL,
    'Un analyste de données',
    'motdepasse789',
    'robertdurand',
    'Marseille'
  ),
  (
    'Lucie',
    'Leroy',
    'lucieleroy@email.fr',
    '6666666666',
    NULL,
    'Une chef de projet',
    'motdepasse111',
    'lucieleroy',
    'Bordeaux'
  ),
  (
    'Thomas',
    'Moreau',
    'thomasmoreau@email.fr',
    '7777777777',
    NULL,
    'Un ingénieur logiciel',
    'motdepasse222',
    'thomasmoreau',
    'Toulouse'
  ),
  (
    'Chloé',
    'Simon',
    'chloesimon@email.fr',
    '8888888888',
    NULL,
    'Une responsable de produit',
    'motdepasse333',
    'chloesimon',
    'Nice'
  ),
  (
    'Emilie',
    'Lefebvre',
    'emilielefebvre@email.fr',
    '9999999999',
    NULL,
    'Un ingénieur DevOps',
    'motdepasse444',
    'emilielefebvre',
    'Nantes'
  ),
  (
    'Victor',
    'Garcia',
    'victorgarcia@email.fr',
    '0000000000',
    NULL,
    'Un designer UX',
    'motdepasse555',
    'victorgarcia',
    'Lille'
  ),
  (
    'Eve',
    'Rousseau',
    'everousseau@email.fr',
    '1111111111',
    NULL,
    'Un ingénieur QA',
    'motdepasse666',
    'everousseau',
    'Strasbourg'
  ),
  (
    'Julie',
    'Dumont',
    'juliedumont@email.fr',
    '2222222222',
    NULL,
    'Une rédactrice technique',
    'motdepasse777',
    'juliedumont',
    'Montpellier'
  );

-- Query SQL project
INSERT INTO
  project (
    name,
    state,
    description,
    project_start_date,
    project_end_date,
    progress,
    project_manager
  )
VALUES
  (
    'Project A',
    'Ongoing',
    'A software development project',
    '2022-01-01',
    '2022-12-31',
    50,
    'John Doe'
  ),
  (
    'Project B',
    'Completed',
    'A web design project',
    '2022-01-01',
    '2022-06-30',
    100,
    'Jane Doe'
  ),
  (
    'Project C',
    'Ongoing',
    'A data analysis project',
    '2022-07-01',
    '2022-12-31',
    75,
    'Bob Smith'
  ),
  (
    'Project D',
    'Not Started',
    'A project management project',
    '2023-01-01',
    '2023-06-30',
    0,
    'Alice Johnson'
  ),
  (
    'Project E',
    'Ongoing',
    'A software engineering project',
    '2022-07-01',
    '2022-12-31',
    60,
    'Tom Brown'
  ),
  (
    'Project F',
    'Not Started',
    'A product management project',
    '2023-01-01',
    '2023-06-30',
    0,
    'Sophie Davis'
  ),
  (
    'Project G',
    'Ongoing',
    'A DevOps engineering project',
    '2022-01-01',
    '2022-12-31',
    80,
    'Michael Wilson'
  ),
  (
    'Project H',
    'Completed',
    'A UX design project',
    '2022-01-01',
    '2022-06-30',
    100,
    'Emily Taylor'
  ),
  (
    'Project I',
    'Ongoing',
    'A QA engineering project',
    '2022-07-01',
    '2022-12-31',
    70,
    'William Lee'
  ),
  (
    'Project J',
    'Not Started',
    'A technical writing project',
    '2023-01-01',
    '2023-06-30',
    0,
    'Olivia Parker'
  );

-- Query SQL task
INSERT INTO
  task (
    name,
    task_start_date,
    task_end_date,
    description,
    state,
    progress,
    type,
    user_id
  )
VALUES
  (
    "Task 1",
    "2023-02-01",
    "2023-02-08",
    "Develop User Login Feature",
    "In Progress",
    50,
    "IT Development",
    11
  ),
  (
    "Task 2",
    "2023-02-01",
    "2023-02-08",
    "Develop Dashboard Design",
    "Not Started",
    0,
    "IT Development",
    11
  ),
  (
    "Task 3",
    "2023-02-02",
    "2023-02-09",
    "Develop Data Management System",
    "Not Started",
    0,
    "IT Development",
    11
  ),
  (
    "Task 4",
    "2023-02-03",
    "2023-02-10",
    "Develop Reporting Feature",
    "Not Started",
    0,
    "IT Development",
    11
  ),
  (
    "Task 5",
    "2023-02-04",
    "2023-02-11",
    "Develop User Profile Feature",
    "Not Started",
    0,
    "IT Development",
    12
  ),
  (
    "Task 6",
    "2023-02-05",
    "2023-02-12",
    "Develop User Settings Feature",
    "Not Started",
    0,
    "IT Development",
    12
  ),
  (
    "Task 7",
    "2023-02-06",
    "2023-02-13",
    "Develop User Notification Feature",
    "Not Started",
    0,
    "IT Development",
    13
  ),
  (
    "Task 8",
    "2023-02-07",
    "2023-02-14",
    "Develop User Billing Feature",
    "Not Started",
    0,
    "IT Development",
    13
  ),
  (
    "Task 9",
    "2023-02-08",
    "2023-02-15",
    "Develop User Management Feature",
    "Not Started",
    0,
    "IT Development",
    14
  ),
  (
    "Task 10",
    "2023-02-09",
    "2023-02-16",
    "Develop User Security Feature",
    "Not Started",
    0,
    "IT Development",
    14
  ),
  (
    "Task 11",
    "2023-02-10",
    "2023-02-17",
    "Develop User Access Control Feature",
    "Not Started",
    0,
    "IT Development",
    15
  ),
  (
    "Task 12",
    "2023-02-11",
    "2023-02-18",
    "Develop User Roles Feature",
    "Not Started",
    0,
    "IT Development",
    15
  ),
  (
    "Task 13",
    "2023-02-12",
    "2023-02-19",
    "Develop User Permissions Feature",
    "Not Started",
    0,
    "IT Development",
    16
  ),
  (
    "Task 14",
    "2023-02-13",
    "2023-02-20",
    "Develop User Tasks Feature",
    "Not Started",
    0,
    "IT Development",
    16
  ),
  (
    "Task 15",
    "2023-02-14",
    "2023-02-21",
    "Develop User Reports Feature",
    "Not Started",
    0,
    "IT Development",
    17
  ),
  (
    "Task 16",
    "2023-02-15",
    "2023-02-22",
    "Develop User Analytics Feature",
    "Not Started",
    0,
    "IT Development",
    17
  ),
  (
    "Task 17",
    "2023-02-16",
    "2023-02-23",
    "Develop User Settings Management Feature",
    "Not Started",
    0,
    "IT Development",
    18
  ),
  (
    "Task 18",
    "2023-02-17",
    "2023-02-24",
    "Develop User Feedback Feature",
    "Not Started",
    0,
    "IT Development",
    18
  ),
  (
    "Task 19",
    "2023-02-18",
    "2023-02-25",
    "Develop User Data Export Feature",
    "Not Started",
    0,
    "IT Development",
    19
  ),
  (
    "Task 20",
    "2023-02-19",
    "2023-02-26",
    "Develop User Data Import Feature",
    "Not Started",
    0,
    "IT Development",
    20
  ),
  (
    "Task 21",
    "2023-02-20",
    "2023-02-27",
    "Develop User Activity Tracking Feature",
    "Not Started",
    0,
    "IT Development",
    12
  ),
  (
    "Task 22",
    "2023-02-21",
    "2023-02-28",
    "Develop User Search Feature",
    "Not Started",
    0,
    "IT Development",
    12
  ),
  (
    "Task 23",
    "2023-02-22",
    "2023-03-01",
    "Develop User Sorting Feature",
    "Not Started",
    0,
    "IT Development",
    13
  ),
  (
    "Task 24",
    "2023-02-23",
    "2023-03-02",
    "Develop User Filtering Feature",
    "Not Started",
    0,
    "IT Development",
    13
  ),
  (
    "Task 25",
    "2023-02-24",
    "2023-03-03",
    "Develop User Pagination Feature",
    "Not Started",
    0,
    "IT Development",
    14
  ),
  (
    "Task 26",
    "2023-02-25",
    "2023-03-04",
    "Develop User Data Visualization Feature",
    "Not Started",
    0,
    "IT Development",
    14
  ),
  (
    "Task 27",
    "2023-02-26",
    "2023-03-05",
    "Develop User Data Validation Feature",
    "Not Started",
    0,
    "IT Development",
    15
  ),
  (
    "Task 28",
    "2023-02-27",
    "2023-03-06",
    "Develop User Data Backup Feature",
    "Not Started",
    0,
    "IT Development",
    15
  ),
  (
    "Task 29",
    "2023-02-28",
    "2023-03-07",
    "Develop User Data Recovery Feature",
    "Not Started",
    0,
    "IT Development",
    16
  ),
  (
    "Task 30",
    "2023-03-01",
    "2023-03-08",
    "Develop User Data Security Feature",
    "Not Started",
    0,
    "IT Development",
    16
  ),
  (
    "Task 31",
    "2023-03-02",
    "2023-03-09",
    "Develop User Data Encryption Feature",
    "Not Started",
    0,
    "IT Development",
    17
  ),
  (
    "Task 32",
    "2023-03-03",
    "2023-03-10",
    "Develop User Data Decryption Feature",
    "Not Started",
    0,
    "IT Development",
    17
  ),
  (
    "Task 33",
    "2023-03-04",
    "2023-03-11",
    "Develop User Data Compression Feature",
    "Not Started",
    0,
    "IT Development",
    18
  ),
  (
    "Task 34",
    "2023-03-05",
    "2023-03-12",
    "Develop User Data Decompression Feature",
    "Not Started",
    0,
    "IT Development",
    18
  ),
  (
    "Task 35",
    "2023-03-06",
    "2023-03-13",
    "Develop User Data Synchronization Feature",
    "Not Started",
    0,
    "IT Development",
    19
  ),
  (
    "Task 36",
    "2023-03-07",
    "2023-03-14",
    "Develop User Data Backup Management Feature",
    "Not Started",
    0,
    "IT Development",
    20
  );

-- Query SQL user_project
INSERT INTO
  user_project (user_id, project_id)
VALUES
  (11, 1),
  (12, 2),
  (13, 3),
  (14, 4),
  (15, 5),
  (16, 6),
  (17, 7),
  (18, 8),
  (19, 9),
  (20, 10);

-- Query SQL task_project
INSERT INTO
  task_project (task_id, project_id)
VALUES
  (1, 1),
  (2, 1),
  (3, 1),
  (4, 1),
  (5, 2),
  (6, 2),
  (7, 3),
  (8, 3),
  (9, 4),
  (10, 4),
  (11, 5),
  (12, 5),
  (13, 6),
  (14, 6),
  (15, 7),
  (16, 7),
  (17, 8),
  (18, 8),
  (19, 9),
  (20, 10),
  (21, 2),
  (22, 2),
  (23, 3),
  (24, 3),
  (25, 4),
  (26, 4),
  (27, 5),
  (28, 5),
  (29, 6),
  (30, 6),
  (31, 7),
  (32, 7),
  (33, 8),
  (34, 8),
  (35, 9),
  (36, 10);