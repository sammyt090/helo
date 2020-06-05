create table users(
id serial primary key,
username varchar(20),
password varchar(20),
profile_pic text
);

create table posts(
id serial primary key,
title varchar(45),
img text,
content text,
author_id integer REFERENCES users(id)
);


alter table users
alter password
type text;



insert into users
(username, password, profile_pic)
values
('yellow', 'yell', 'PROFILE PICTURE');

insert into posts
(title, img, content, author_id)
values
('FUN TIMES', 'IMAGE', 'WHEN WE', 1)

select * from users;
select * from posts;