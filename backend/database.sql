-- Active: 1678616074625@@127.0.0.1@3306@dbdevhubprojectUSE dbdevhubproject;

DROP TABLE IF EXISTS user;

CREATE TABLE
    user (
        id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
        firstname VARCHAR(60) NOT NULL,
        lastname VARCHAR(60) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        phone VARCHAR(10) UNIQUE,
        user_image BLOB,
        biography VARCHAR(255),
        hashedPassword VARCHAR(255),
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
        user_id INT,
        CONSTRAINT fk_task_user FOREIGN KEY (user_id) REFERENCES user(id)
    ) ENGINE = InnoDB;

DROP TABLE IF EXISTS note ;

CREATE TABLE
    note (
        id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
        description VARCHAR(300) NOT NULL,
        user_id INT NOT NULL,
        CONSTRAINT fk_note_user FOREIGN KEY (user_id) REFERENCES user(id)
    ) ENGINE = InnoDB;

DROP TABLE IF EXISTS message ;

CREATE TABLE
    message (
        id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
        title VARCHAR(255) NOT NULL,
        content TEXT NOT NULL,
        date_sent DATE NOT NULL,
        state VARCHAR(255),
        author_id INT NOT NULL,
        CONSTRAINT fk_author_id FOREIGN KEY (author_id) REFERENCES user(id)
    ) ENGINE = InnoDB;

DROP TABLE IF EXISTS recipient ;

CREATE TABLE
    recipient (
        id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
        recipient_id INT NOT NULL,
        message_id INT NOT NULL,
        FOREIGN KEY (recipient_id) REFERENCES user(id) ON DELETE CASCADE,
        FOREIGN KEY (message_id) REFERENCES message(id) ON DELETE CASCADE
    ) ENGINE = InnoDB;

DROP TABLE IF EXISTS task_project ;

CREATE TABLE
    task_project (
        id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
        task_id INT NOT NULL,
        project_id INT NOT NULL,
        FOREIGN KEY (task_id) REFERENCES task(id) ON DELETE CASCADE,
        FOREIGN KEY (project_id) REFERENCES project(id) ON DELETE CASCADE
    ) ENGINE = InnoDB;

DROP TABLE IF EXISTS user_project ;

CREATE TABLE
    user_project (
        id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
        user_id INT,
        project_id INT,
        FOREIGN KEY (user_id) REFERENCES user(id),
        FOREIGN KEY (project_id) REFERENCES project(id)
    ) ENGINE = InnoDB;

USE dbdevhubproject;

-- Query to feed sql data in USER table

INSERT INTO
    user (
        firstname,
        lastname,
        email,
        phone,
        user_image,
        biography,
        hashedPassword,
        github_page,
        city
    )
VALUES (
        'John',
        'Doe',
        'johndoe@email.com',
        '1234567890',
        NULL,
        'A software developer',
        '$argon2id$v=19$m=65536,t=5,p=1$mNJNlU8pRBXbCLIJjZwZWg$X90u1DE3J+vtIV+AvQCB1IB/g2epOVEwnB1ikuJmaH8', 
        -- //password112
        'johndoe',
        'New York'
    ), (
        'Jane',
        'Doe',
        'janedoe@email.com',
        '0987654321',
        NULL,
        'A web designer',
        '$argon2id$v=19$m=65536,t=5,p=1$AP4W9uC0rCuw4kiU7DcIgQ$Ft9fTgWjOp2yeimahVmnKZQtAEmNjKBdzYbI0/T0OQQ',
        -- // password141
        'janedoe',
        'Los Angeles'
    ), (
        'Bob',
        'Smith',
        'bobsmith@email.com',
        '5555555555',
        NULL,
        'A data analyst',
        '$argon2id$v=19$m=65536,t=5,p=1$Kl278CswLedGEIKBbVkm2A$oxqwAHcBaaCZriLGmbVRxlcgDBjOfQ5SgDJugciSX3Q', 
        -- // password191
        'bobsmith',
        'Chicago'
    ), (
        'Alice',
        'Johnson',
        'alicejohnson@email.com',
        '6666666666',
        NULL,
        'A project manager',
        '$argon2id$v=19$m=65536,t=5,p=1$HEu7sziIK50nuWQ2UJO6iA$taYdt0qeKaIf8SUMlDIxXCzm3aWx79opfAiNMmyNpFU', 
        -- // password900
        'alicejohnson',
        'Houston'
    ), (
        'Tom',
        'Brown',
        'tombrown@email.com',
        '7777787777',
        NULL,
        'A software engineer',
        '$argon2id$v=19$m=65536,t=5,p=1$RDHjstYKQP9TK5ZT9PqFRg$vgql0wWlIPTqgNWsKVC6NPo7qjn7ZE6YPs/Jg1popNI', 
        -- // password922
        'tombrown',
        'Phoenix'
    ), (
        'Sophie',
        'Davis',
        'sophiedavis@email.com',
        '8888888888',
        NULL,
        'A product manager',
        '$argon2id$v=19$m=65536,t=5,p=1$XhEbXL1iDgRwjhfaHlR2BA$3Z0rG6ALfh2+6xVQDW3Pe8Y2lhvAePViupm06OPlYLM', 
        -- // password933
        'sophiedavis',
        'Philadelphia'
    ), (
        'Michael',
        'Wilson',
        'michaelwilson@email.com',
        '9999999999',
        NULL,
        'A DevOps engineer',
        '$argon2id$v=19$m=65536,t=5,p=1$DZZevDGH57an3ozQIxfrPg$jXDwBWHN4iuQLl+xRCc5UpeIQJxNIDKp6YMaXkYjqr4', 
        -- // password944
        'michaelwilson',
        'San Francisco'
    ), (
        'Emily',
        'Taylor',
        'emilytaylor@email.com',
        '0000000000',
        NULL,
        'A UX designer',
        '$argon2id$v=19$m=65536,t=5,p=1$BRAEbr5xORTwm3TuGzULkQ$WP1cZh/k/6Mw35pRB6ygB9Y6dE0LSDqPvbblX5SiFuk', 
        -- // password559
        'emilytaylor',
        'Seattle'
    ), (
        'William',
        'Lee',
        'williamlee@email.com',
        '1111211111',
        NULL,
        'A QA engineer',
        '$argon2id$v=19$m=65536,t=5,p=1$bClup2bi/scAzda6dXTmyw$BNEqCjXMFQATpQFqMJikLOHUBN7hvOYNTKkVSVnOqmg', 
        -- // password669
        'williamlee',
        'Austin'
    ), (
        'Olivia',
        'Parker',
        'oliviaparker@email.com',
        '2222222225',
        NULL,
        'A technical writer',
        '$argon2id$v=19$m=65536,t=5,p=1$XAmkW4+PKquxQQzzqnZCAw$eQ/3OCkaQIsLCdLwfoKs7GCRy6vBFmSrqE0a5soKdS8', 
        -- // password179
        'oliviaparker',
        'Boston'
    ), (
        'Jean',
        'Dupont',
        'jeandupont@email.fr',
        '1234565890',
        NULL,
        'Un développeur logiciel',
        '$argon2id$v=19$m=65536,t=5,p=1$BKyCFxU007zI767/lNKSqw$odR09SxQqI6MKrnCTmWknj9ejm93L25wvurt+RxeOBI', 
        -- // motdepasse159
        'jeandupont',
        'Paris'
    ), (
        'Jacques',
        'Martin',
        'jacquesmartin@email.fr',
        '0987655321',
        NULL,
        'Un concepteur web',
        '$argon2id$v=19$m=65536,t=5,p=1$UNcv3iKJldnpcq+nwE+mEw$e/odBGuAl5HpLDIchvPNVI0de7aPnNKuHana3oYRTYg', 
        -- // motdepasse659
        'jacquesmartin',
        'Lyon'
    ), (
        'Robert',
        'Durand',
        'robertdurand@email.fr',
        '5555455555',
        NULL,
        'Un analyste de données',
        '$argon2id$v=19$m=65536,t=5,p=1$fyrqvHoVk8IQdzBWWa0nGw$glsjVeA0xf4uvAVhHO/HRBiSNOByZ0WqlUxFV3l4soE', 
        -- // motdepasse149
        'robertdurand',
        'Marseille'
    ), (
        'Lucie',
        'Leroy',
        'lucieleroy@email.fr',
        '6666676666',
        NULL,
        'Une chef de projet',
        '$argon2id$v=19$m=65536,t=5,p=1$5ZwH5YxDp5xB7AlR5jOlTw$gOvfSR9rJPeXogYgpbkBvM/JR6NYDXnIPKhvbT1xlXM', -- // motdepasse112
        'lucieleroy',
        'Bordeaux'
    ), (
        'Thomas',
        'Moreau',
        'thomasmoreau@email.fr',
        '7777777777',
        NULL,
        'Un ingénieur logiciel',
        '$argon2id$v=19$m=65536,t=5,p=1$J2ru23iBsi3StiuUOGDXQg$gMPPj8yhFi+H8wYHQrs/BzLWZqzMglhAwp2+UY1H+Dc', -- // motdepasse223
        'thomasmoreau',
        'Toulouse'
    ), (
        'Chloé',
        'Simon',
        'chloesimon@email.fr',
        '8888888878',
        NULL,
        'Une responsable de produit',
        '$argon2id$v=19$m=65536,t=5,p=1$BFzQpoo89RVHctOjh3m5lA$jXfpK+wvH74f4JqjGKj97xVy2P8TlC0pHJUDl48Y2k0', -- // motdepasse334
        'chloesimon',
        'Nice'
    ), (
        'Emilie',
        'Lefebvre',
        'emilielefebvre@email.fr',
        '9999999799',
        NULL,
        'Un ingénieur DevOps',
        '$argon2id$v=19$m=65536,t=5,p=1$0rBl/s7hnBmQNfCdvD9/fg$XQTwROzqIGo3Z3sOijOh/sk/u0DII3ZqZPc+I8j6tZs', -- // motdepasse445
        'emilielefebvre',
        'Nantes'
    ), (
        'Victor',
        'Garcia',
        'victorgarcia@email.fr',
        '0000007000',
        NULL,
        'Un designer UX',
        '$argon2id$v=19$m=65536,t=5,p=1$Ty/5WKBNoaAeEvVClMMuMg$Bn0tLMOlfIQVaJqmSMs94zVMGonT9sMjM5e56/zt7Bg', -- // motdepasse556
        'victorgarcia',
        'Lille'
    ), (
        'Eve',
        'Rousseau',
        'everousseau@email.fr',
        '1111111111',
        NULL,
        'Un ingénieur QA',
        '$argon2id$v=19$m=65536,t=5,p=1$TkpvF00ujqNglWdUWZoZZg$v/7XQl6RDdy6FJtRIZSv/0xzwa01kZc/QDoAZhxEnzk', -- // motdepasse566
        'everousseau',
        'Strasbourg'
    ), (
        'Julie',
        'Dumont',
        'juliedumont@email.fr',
        '2222222222',
        NULL,
        'Une rédactrice technique',
        '$argon2id$v=19$m=65536,t=5,p=1$v3WP/x4IuMvX9oLzYgqnSw$4VlAL/FDwkfwBDca+BrFQo+YQDqSXmYsYOGKa2QgLMk', -- // motdepasse677
        'juliedumont',
        'Montpellier'
    );

ALTER TABLE user ADD user_role VARCHAR(50);

UPDATE user
SET
    user_role = 'Développeur full-stack'
WHERE user_role IS NULL;

UPDATE user
SET
    user_role = 'Développeur front-end'
WHERE
    id IN ('3', '5', '17', '19');

UPDATE user
SET
    user_role = 'Développeur back-end'
WHERE
    id IN ('4', '6', '12', '18');

UPDATE user
SET
    user_role = 'Gestionnaire de projets'
WHERE
    id IN ('1', '8', '13', '20');

UPDATE user
SET
    user_role = 'Designer UI/UX'
WHERE id IN ('9', '14', '16');

-- Query to feed sql data in project table

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
VALUES (
        'Project A',
        'Ongoing',
        'A software development project',
        '2022-01-01',
        '2022-12-31',
        50,
        'John Doe'
    ), (
        'Project B',
        'Completed',
        'A web design project',
        '2022-01-01',
        '2022-06-30',
        100,
        'Jane Doe'
    ), (
        'Project C',
        'Ongoing',
        'A data analysis project',
        '2022-07-01',
        '2022-12-31',
        75,
        'Bob Smith'
    ), (
        'Project D',
        'Not Started',
        'A project management project',
        '2023-01-01',
        '2023-06-30',
        0,
        'Alice Johnson'
    ), (
        'Project E',
        'Ongoing',
        'A software engineering project',
        '2022-07-01',
        '2022-12-31',
        60,
        'Tom Brown'
    ), (
        'Project F',
        'Not Started',
        'A product management project',
        '2023-01-01',
        '2023-06-30',
        0,
        'Sophie Davis'
    ), (
        'Project G',
        'Ongoing',
        'A DevOps engineering project',
        '2022-01-01',
        '2022-12-31',
        80,
        'Michael Wilson'
    ), (
        'Project H',
        'Completed',
        'A UX design project',
        '2022-01-01',
        '2022-06-30',
        100,
        'Emily Taylor'
    ), (
        'Project I',
        'Ongoing',
        'A QA engineering project',
        '2022-07-01',
        '2022-12-31',
        70,
        'William Lee'
    ), (
        'Project J',
        'Not Started',
        'A technical writing project',
        '2023-01-01',
        '2023-06-30',
        0,
        'Olivia Parker'
    );

UPDATE project SET name = 'Bookworm' WHERE name = ('Project A');

UPDATE project SET name = 'EatWell' WHERE name = ('Project B');

UPDATE project SET name = 'Greenify' WHERE name = ('Project C');

UPDATE project SET name = 'Mindful' WHERE name = ('Project D');

UPDATE project SET name = 'RecycleNow' WHERE name = ('Project E');

UPDATE project SET name = 'TalkTogether' WHERE name = ('Project F');

UPDATE project SET name = 'TimeTrack' WHERE name = ('Project G');

UPDATE project SET name = 'FitBuddy' WHERE name = ('Project H');

UPDATE project SET name = 'Wanderlust' WHERE name = ('Project I');

UPDATE project SET name = 'YumYum' WHERE name = ('Project J');

-- Query to feed sql data in task table

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
VALUES (
        "Task 1",
        "2023-02-01",
        "2023-02-08",
        "Develop User Login Feature",
        "In Progress",
        50,
        "IT Development",
        11
    ), (
        "Task 2",
        "2023-02-01",
        "2023-02-08",
        "Develop Dashboard Design",
        "Not Started",
        0,
        "IT Development",
        11
    ), (
        "Task 3",
        "2023-02-02",
        "2023-02-09",
        "Develop Data Management System",
        "Not Started",
        0,
        "IT Development",
        11
    ), (
        "Task 4",
        "2023-02-03",
        "2023-02-10",
        "Develop Reporting Feature",
        "Not Started",
        0,
        "IT Development",
        11
    ), (
        "Task 5",
        "2023-02-04",
        "2023-02-11",
        "Develop User Profile Feature",
        "Not Started",
        0,
        "IT Development",
        12
    ), (
        "Task 6",
        "2023-02-05",
        "2023-02-12",
        "Develop User Settings Feature",
        "Not Started",
        0,
        "IT Development",
        12
    ), (
        "Task 7",
        "2023-02-06",
        "2023-02-13",
        "Develop User Notification Feature",
        "Not Started",
        0,
        "IT Development",
        13
    ), (
        "Task 8",
        "2023-02-07",
        "2023-02-14",
        "Develop User Billing Feature",
        "Not Started",
        0,
        "IT Development",
        13
    ), (
        "Task 9",
        "2023-02-08",
        "2023-02-15",
        "Develop User Management Feature",
        "Not Started",
        0,
        "IT Development",
        14
    ), (
        "Task 10",
        "2023-02-09",
        "2023-02-16",
        "Develop User Security Feature",
        "Not Started",
        0,
        "IT Development",
        14
    ), (
        "Task 11",
        "2023-02-10",
        "2023-02-17",
        "Develop User Access Control Feature",
        "Not Started",
        0,
        "IT Development",
        15
    ), (
        "Task 12",
        "2023-02-11",
        "2023-02-18",
        "Develop User Roles Feature",
        "Not Started",
        0,
        "IT Development",
        15
    ), (
        "Task 13",
        "2023-02-12",
        "2023-02-19",
        "Develop User Permissions Feature",
        "Not Started",
        0,
        "IT Development",
        16
    ), (
        "Task 14",
        "2023-02-13",
        "2023-02-20",
        "Develop User Tasks Feature",
        "Not Started",
        0,
        "IT Development",
        16
    ), (
        "Task 15",
        "2023-02-14",
        "2023-02-21",
        "Develop User Reports Feature",
        "Not Started",
        0,
        "IT Development",
        17
    ), (
        "Task 16",
        "2023-02-15",
        "2023-02-22",
        "Develop User Analytics Feature",
        "Not Started",
        0,
        "IT Development",
        17
    ), (
        "Task 17",
        "2023-02-16",
        "2023-02-23",
        "Develop User Settings Management Feature",
        "Not Started",
        0,
        "IT Development",
        18
    ), (
        "Task 18",
        "2023-02-17",
        "2023-02-24",
        "Develop User Feedback Feature",
        "Not Started",
        0,
        "IT Development",
        18
    ), (
        "Task 19",
        "2023-02-18",
        "2023-02-25",
        "Develop User Data Export Feature",
        "Not Started",
        0,
        "IT Development",
        19
    ), (
        "Task 20",
        "2023-02-19",
        "2023-02-26",
        "Develop User Data Import Feature",
        "Not Started",
        0,
        "IT Development",
        20
    ), (
        "Task 21",
        "2023-02-20",
        "2023-02-27",
        "Develop User Activity Tracking Feature",
        "Not Started",
        0,
        "IT Development",
        12
    ), (
        "Task 22",
        "2023-02-21",
        "2023-02-28",
        "Develop User Search Feature",
        "Not Started",
        0,
        "IT Development",
        12
    ), (
        "Task 23",
        "2023-02-22",
        "2023-03-01",
        "Develop User Sorting Feature",
        "Not Started",
        0,
        "IT Development",
        13
    ), (
        "Task 24",
        "2023-02-23",
        "2023-03-02",
        "Develop User Filtering Feature",
        "Not Started",
        0,
        "IT Development",
        13
    ), (
        "Task 25",
        "2023-02-24",
        "2023-03-03",
        "Develop User Pagination Feature",
        "Not Started",
        0,
        "IT Development",
        14
    ), (
        "Task 26",
        "2023-02-25",
        "2023-03-04",
        "Develop User Data Visualization Feature",
        "Not Started",
        0,
        "IT Development",
        14
    ), (
        "Task 27",
        "2023-02-26",
        "2023-03-05",
        "Develop User Data Validation Feature",
        "Not Started",
        0,
        "IT Development",
        15
    ), (
        "Task 28",
        "2023-02-27",
        "2023-03-06",
        "Develop User Data Backup Feature",
        "Not Started",
        0,
        "IT Development",
        15
    ), (
        "Task 29",
        "2023-02-28",
        "2023-03-07",
        "Develop User Data Recovery Feature",
        "Not Started",
        0,
        "IT Development",
        16
    ), (
        "Task 30",
        "2023-03-01",
        "2023-03-08",
        "Develop User Data Security Feature",
        "Not Started",
        0,
        "IT Development",
        16
    ), (
        "Task 31",
        "2023-03-02",
        "2023-03-09",
        "Develop User Data Encryption Feature",
        "Not Started",
        0,
        "IT Development",
        17
    ), (
        "Task 32",
        "2023-03-03",
        "2023-03-10",
        "Develop User Data Decryption Feature",
        "Not Started",
        0,
        "IT Development",
        17
    ), (
        "Task 33",
        "2023-03-04",
        "2023-03-11",
        "Develop User Data Compression Feature",
        "Not Started",
        0,
        "IT Development",
        18
    ), (
        "Task 34",
        "2023-03-05",
        "2023-03-12",
        "Develop User Data Decompression Feature",
        "Not Started",
        0,
        "IT Development",
        18
    ), (
        "Task 35",
        "2023-03-06",
        "2023-03-13",
        "Develop User Data Synchronization Feature",
        "Not Started",
        0,
        "IT Development",
        19
    ), (
        "Task 36",
        "2023-03-07",
        "2023-03-14",
        "Develop User Data Backup Management Feature",
        "Not Started",
        0,
        "IT Development",
        20
    );

UPDATE task
SET
    name = 'Élaboration du cahier des charges'
WHERE
    name IN (
        'Task 1',
        'Task 7',
        'Task 13',
        'Task 19',
        'Task 25',
        'Task 31'
    );

UPDATE task
SET type = 'Planification'
WHERE
    name = 'Élaboration du cahier des charges';

UPDATE task
SET
    name = 'Évaluation des ressources nécessaires'
WHERE
    name IN (
        'Task 2',
        'Task 8',
        'Task 14',
        'Task 20',
        'Task 26',
        'Task 32'
    );

UPDATE task
SET type = 'Gestion'
WHERE
    name = 'Évaluation des ressources nécessaires';

UPDATE task
SET
    name = 'Gestion des modifications du projet'
WHERE
    name IN (
        'Task 3',
        'Task 9',
        'Task 15',
        'Task 21',
        'Task 27',
        'Task 33'
    );

UPDATE task
SET type = 'Front-end'
WHERE
    name = 'Gestion des modifications du projet';

UPDATE task
SET
    name = 'Planification de la maintenance du projet'
WHERE
    name IN (
        'Task 4',
        'Task 10',
        'Task 16',
        'Task 22',
        'Task 28',
        'Task 34'
    );

UPDATE task
SET type = 'Back-end'
WHERE
    name = 'Planification de la maintenance du projet';

UPDATE task
SET
    name = 'Gestion des versions des livrables'
WHERE
    name IN (
        'Task 5',
        'Task 11',
        'Task 17',
        'Task 23',
        'Task 29',
        'Task 35'
    );

UPDATE task
SET type = 'UX design'
WHERE
    name = 'Gestion des versions des livrables';

UPDATE task
SET
    name = 'Retour interface utilisateur'
WHERE
    name IN (
        'Task 6',
        'Task 12',
        'Task 18',
        'Task 24',
        'Task 30',
        'Task 36'
    );

UPDATE task
SET type = 'UI design'
WHERE
    name = 'Retour interface utilisateur';

UPDATE task SET user_id = '1' WHERE user_id = '11';

-- Query to feed sql data in user_project table

INSERT INTO
    user_project (user_id, project_id)
VALUES  (1, 1),(2, 1),(3, 1),(4, 1),(5, 1),(7, 1), 
        (6, 2),(7, 2),(8, 2),(9, 2),(10, 2),(1, 2), 
        (1, 3),(11, 3),(12, 3),(13, 3),(14, 3),(15, 3), 
        (16, 4),(17, 4),(18, 4),(19, 4),(20, 4),(14, 4), 
        (15, 5),(3, 5),(6, 5),(8, 5),(17, 5),(19, 5), 
        (16, 6),(2, 6),(4, 6),(5, 6),(9, 6),(11, 6), 
        (1, 7),(8, 7),(13, 7),(15, 7),(19, 7),(20, 7), 
        (18, 8),(1, 8),(12, 8),(6, 8),(7, 8),(4, 8), 
        (19, 9),(10, 9),(6, 9),(3, 9),(7, 9),(20, 9), 
        (20, 10),(10, 10),(8, 10),(5, 10),(13, 10);


-- Query to feed sql data in task_project table

INSERT INTO
    task_project (task_id, project_id)
VALUES  (1, 1), (2, 1), (3, 1), (4, 1),
        (5, 2), (6, 2), (7, 2), (8, 2),
        (9, 3), (10, 3), (11, 3), (12, 3),
        (13, 4), (14, 4), (15, 4), (16, 4),
        (17, 5), (18, 5), (19, 5), (20, 5),
        (21, 6), (22, 6), (23, 6), (24, 6),
        (25, 7), (26, 7), (27, 7), (28, 7),
        (29, 8), (30, 8), (31, 8), (32, 9),
        (33, 9), (34, 9), (35, 10), (36, 10);

-- Query to feed sql data in message table

INSERT INTO
    message (
        title,
        content,
        date_sent,
        state,
        author_id
    )
VALUES (
        "Titre 1",
        "Contenu 1",
        "2023-02-02",
        "Lu",
        1
    ), (
        "Titre 2",
        "Contenu 2",
        "2023-02-02",
        "Lu",
        2
    ), (
        "Titre 3",
        "Contenu 3",
        "2023-02-02",
        "Non Lu",
        3
    ), (
        "Titre 4",
        "Contenu 4",
        "2023-02-02",
        "Lu",
        4
    ), (
        "Titre 5",
        "Contenu 5",
        "2023-02-02",
        "Non Lu",
        5
    ), (
        "Titre 6",
        "Contenu 6",
        "2023-02-02",
        "Lu",
        6
    ), (
        "Titre 7",
        "Contenu 7",
        "2023-02-02",
        "Lu",
        7
    ), (
        "Titre 8",
        "Contenu 8",
        "2023-02-02",
        "Non Lu",
        8
    ), (
        "Titre 9",
        "Contenu 9",
        "2023-02-02",
        "Lu",
        9
    ), (
        "Titre 10",
        "Contenu 10",
        "2023-02-02",
        "Non Lu",
        10
    ), (
        "Titre 11",
        "Contenu 11",
        "2023-02-02",
        "Lu",
        11
    ), (
        "Titre 12",
        "Contenu 12",
        "2023-02-02",
        "Lu",
        12
    ), (
        "Titre 13",
        "Contenu 13",
        "2023-02-02",
        "Non Lu",
        13
    ), (
        "Titre 14",
        "Contenu 14",
        "2023-02-02",
        "Lu",
        14
    ), (
        "Titre 15",
        "Contenu 15",
        "2023-02-02",
        "Non Lu",
        15
    ), (
        "Titre 16",
        "Contenu 16",
        "2023-02-02",
        "Lu",
        16
    ), (
        "Titre 17",
        "Contenu 17",
        "2023-02-02",
        "Lu",
        17
    ), (
        "Titre 18",
        "Contenu 18",
        "2023-02-02",
        "Non Lu",
        18
    ), (
        "Titre 19",
        "Contenu 19",
        "2023-02-02",
        "Lu",
        19
    ), (
        "Titre 20",
        "Contenu 20",
        "2023-02-02",
        "Lu",
        20
    );

-- Query to feed sql data in recipient

INSERT INTO
    recipient (recipient_id, message_id)
VALUES (11, 1), (12, 2), (13, 3), (14, 4), (15, 5), (16, 6), (17, 7), (18, 8), (19, 9), (20, 10), (11, 11), (12, 12), (13, 13), (14, 14), (15, 15), (16, 16), (17, 17), (18, 18), (19, 19), (20, 20);

INSERT INTO
    note (id, description, user_id)
VALUES (
        1,
        "Correction de bug : J'ai identifié et corrigé un bug qui empêchait les utilisateurs de se connecter à leur compte.",
        1
    ), (
        2,
        "Optimisation des performances : J'ai optimisé la vitesse de chargement de la page d'accueil de notre site web en réduisant la taille des images.",
        1
    ), (
        3,
        "Amélioration de l'interface utilisateur : J'ai mis à jour l'interface utilisateur de notre application mobile pour la rendre plus intuitive et facile à utiliser.",
        1
    ), (
        4,
        "J'ai développé une nouvelle fonctionnalité qui permet aux utilisateurs de partager des articles sur les réseaux sociaux.",
        1
    ), (
        5,
        "Intégration d'une API : J'ai intégré une API tierce pour permettre à notre application de se connecter à d'autres services.",
        1
    ), (
        6,
        "Mise à jour de la base de données : J'ai mis à jour notre base de données pour prendre en charge de nouveaux types de données.",
        1
    ), (
        7,
        "Correction de vulnérabilité de sécurité : J'ai corrigé une vulnérabilité de sécurité qui aurait pu permettre à des pirates informatiques d'accéder aux données sensibles des utilisateurs.",
        1
    ), (
        8,
        "Réécriture de code : J'ai réécrit une partie de notre code pour améliorer sa lisibilité et sa maintenabilité.",
        1
    ), (
        9,
        "Refonte de l'architecture : J'ai repensé l'architecture de notre application pour la rendre plus évolutive et plus facile à déployer.",
        1
    ), (
        10,
        "Déploiement de la version : J'ai déployé la dernière version de notre application sur le serveur de production.",
        1
    );

SELECT project.name
FROM project
    INNER JOIN user_project ON project.id = user_project.project_id
WHERE user_project.user_id = 1;

USE dbdevhubproject;