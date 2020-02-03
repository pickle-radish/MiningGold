create table inventory(
	user_name varchar(20),
    item_id int,
    buy TINYINT default true,
    onoff tinyint default false,
    primary key(user_name, item_id),
    foreign key(user_name) references user(name),
    foreign key(item_id) references item(item_id)
)
default character set=utf8;