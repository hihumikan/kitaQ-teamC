#!/bin/sh

CMD_MYSQL="mysql -u${MYSQL_USER} -p${MYSQL_PASSWORD} ${MYSQL_DATABASE}"
$CMD_MYSQL -e "create table article (
    id int(10)  AUTO_INCREMENT NOT NULL primary key,
    title varchar(50) NOT NULL,
    body varchar(1000)
    );"
$CMD_MYSQL -e  "insert into article values (1, '記事1', '記事1です。');"
$CMD_MYSQL -e  "insert into article values (2, '記事2', '記事2です。');"

$CMD_MYSQL -e "create table leafony(
    id int(100) AUTO_INCREMENT NOT NULL primary key,
    identifier varchar(255) NOT NULL
    );"

$CMD_MYSQL -e "create table pre(
    id int(100) AUTO_INCREMENT NOT NULL primary key,
    value varchar(255),
    reg_date DATETIME,
    app_date DATETIME
    );"