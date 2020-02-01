create table inventory(
	user_id varchar(20),
    item_id varchar(20),
    buy TINYINT default false,
    onoff tinyint default false,
    primary key(user_id, item_id)
)
default character set=utf8;