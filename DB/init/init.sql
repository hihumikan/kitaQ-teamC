use db;

CREATE TABLE
    `people` (
        `id` SERIAL NOT NULL,
        `datetime` DATETIME NOT NULL,
        `people_count` INT NOT NULL,
        PRIMARY KEY (`id`)
    );
