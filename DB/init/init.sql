use db;

CREATE TABLE
    `users` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `user_name` VARCHAR(255) NOT NULL,
        `email` VARCHAR(255) NOT NULL UNIQUE,
        `password` VARCHAR(32) NOT NULL,
        `description` TEXT NOT NULL,
        `isParent` BOOLEAN NOT NULL,
        `created_at` datetime default current_timestamp,
        `updated_at` timestamp default current_timestamp on update current_timestamp,
        PRIMARY KEY (`id`)
    );

CREATE TABLE
    `posts` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `user_id` INT NOT NULL,
        `title` VARCHAR(255) NOT NULL,
        `description` TEXT NOT NULL,
        `created_at` datetime default current_timestamp,
        `updated_at` timestamp default current_timestamp on update current_timestamp,
        FOREIGN KEY (`user_id`) REFERENCES users(`id`),
        PRIMARY KEY (`id`)
    );

CREATE TABLE
    `comments` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `post_id` INT NOT NULL,
        `user_id` INT NOT NULL,
        `comment` TEXT NOT NULL,
        `created_at` datetime default current_timestamp,
        `updated_at` timestamp default current_timestamp on update current_timestamp,
        FOREIGN KEY (`post_id`) REFERENCES posts(`id`),
        FOREIGN KEY (`user_id`) REFERENCES users(`id`),
        PRIMARY KEY (`id`)
    );

CREATE TABLE
    `session` (
        `user_id` INT NOT NULL,
        `session` VARCHAR(32) NOT NULL,
        PRIMARY KEY (`user_id`),
        FOREIGN KEY (`user_id`) REFERENCES users(`id`)
    );

INSERT INTO
    users (
        id,
        user_name,
        email,
        password,
        description,
        isParent
    ) VALUE(
        1,
        'ほげほげ',
        'hoge@hoge.com',
        '5f4dcc3b5aa765d61d8327deb882cf99',
        'ユーザーの説明文です',
        0
    ), (
        2,
        'ラーメン好き男',
        'hoge2@hoge.com',
        '5f4dcc3b5aa765d61d8327deb882cf99',
        'ラーメンの汁は残す派',
        1
    ), (
        3,
        'ぴよぴよ',
        'hoge3@hoge.com',
        '5f4dcc3b5aa765d61d8327deb882cf99',
        'ピヨピヨピヨピヨ',
        0
    ), (
        4,
        '田中太郎',
        'hoge4@hoge.com',
        '5f4dcc3b5aa765d61d8327deb882cf99',
        '名前がexampleでよく使われます',
        1
    ), (
        5,
        'Edge信者',
        'hoge5@hoge.com',
        '5f4dcc3b5aa765d61d8327deb882cf99',
        'Edgeしか使いません',
        1
    );

INSERT INTO
    posts (id, user_id, title, description) VALUE (1, 1, '昼ごはん', '近くのラーメン屋美味かった'), (
        2,
        1,
        '夜ご飯',
        '今日は健康に気遣ってバナナを食べてから運動した'
    );

INSERT INTO
    comments (id, post_id, user_id, comment) VALUE (1, 1, 5, '健康に悪いぞ！'), (2, 1, 2, 'うまそう！'), (3, 2, 3, 'ピヨピヨピヨピヨ（私の色と一緒だ）');

INSERT INTO
    session (user_id, session) VALUE (
        1,
        12345678901234567890123456789012
    );