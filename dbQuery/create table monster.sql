create table monster(
	m_lv int auto_increment,
    name varchar(20) not null,
    img varchar(50),
    hp int,
    exp int,
    primary key(m_lv)
)
default character set=utf8;