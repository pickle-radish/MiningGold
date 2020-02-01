create table item(
	item_id int auto_increment,
    name varchar(20) not null,
    price int default 0,
    category varchar(20),
    img varchar(50),
	power int default 0,
    primary key (item_id)
)
default character set=utf8;