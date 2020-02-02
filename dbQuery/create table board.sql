create table board(
	bo_no int auto_increment, 
    n_name varchar(20) not null,
	title varchar(50),
    content text,
    create_time datetime default now(),
    primary key(bo_no),
    foreign key(n_name) references user(name)
)
default character set=utf8;
