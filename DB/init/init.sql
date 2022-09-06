use db;

CREATE TABLE `users` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`user_name` VARCHAR(255) NOT NULL,
	`email` VARCHAR(255) NOT NULL,
	`password` VARCHAR(32) NOT NULL,
	`description` TEXT NOT NULL,
    `isParent` BOOLEAN NOT NULL,
    `created_at` datetime default current_timestamp,
    `updated_at` timestamp default current_timestamp on update current_timestamp,
	PRIMARY KEY (`id`)
);

CREATE TABLE `posts` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`user_id` INT NOT NULL,
	`title` VARCHAR(255) NOT NULL,
	`description` TEXT NOT NULL,
    `created_at` datetime default current_timestamp,
    `updated_at` timestamp default current_timestamp on update current_timestamp,
    FOREIGN KEY (`user_id`) REFERENCES users(`id`),
	PRIMARY KEY (`id`)
);

CREATE TABLE `comments` (
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

INSERT INTO users (id,user_name,email,password,description,isParent) 
    VALUE(1,'ほげほげ','hoge@hoge.com','5f4dcc3b5aa765d61d8327deb882cf99','ユーザーの説明文です',1);

INSERT INTO posts (id,user_id,title,description) 
    VALUE (1,1,'投稿のタイトル','投稿の説明文です。NULLはダメ');

INSERT INTO comments (id,post_id,user_id,comment) 
    VALUE (1,1,1,'投稿のコメントです');