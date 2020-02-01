create table user(
	id varchar(20),
    pw varchar(20),
    name varchar(20) not null,
    lv int default 1,
    exp int default 0,
    gold int default 0,
    stage int default 1,
    primary key(id))
    default character set=utf8; 
    