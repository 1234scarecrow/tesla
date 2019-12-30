#设置客户端连接服务器端的编码为UTF8
SET NAMES UTF8;
#丢弃数据库，如果存在的话
DROP DATABASE IF EXISTS tesla;
#创建数据库
CREATE DATABASE tesla CHARSET=UTF8;
#进入数据库
USE tesla;
#创建保存用户信息数据的表
CREATE TABLE tesla_user(
	uid INT PRIMARY KEY AUTO_INCREMENT,
	uname VARCHAR(32),
	upwd VARCHAR(32),
	phone VARCHAR(16),
	photo varchar(128), # 用户头像，保存url
	usign VARCHAR(2),
	ucar VARCHAR(128),
	ucol VARCHAR(128),  # 我的收藏，保存url
	uact VARCHAR(128)	# 我的活动，保存url
);
#插入用户信息数据
# INSERT INTO tesla_user VALUES(NULL,'gaorourou','123123','13834205053');
# INSERT INTO tesla_user VALUES(NULL,'gaojinxu','123123','15234805079');
# INSERT INTO tesla_user VALUES(NULL,'guoqiang','123123','13834205053');
# INSERT INTO tesla_user VALUES(NULL,'yangtai','123123','13834205053');
# INSERT INTO tesla_user VALUES(NULL,'wangjiajun','123123','15512345678');
# INSERT INTO tesla_user VALUES(NULL,'luoguiling','123123','13834205053');
#创建保存商品种类的表
CREATE TABLE tesla_products_family(
	fid INT PRIMARY KEY AUTO_INCREMENT,
	fname VARCHAR(32)
);
#创建产品表
CREATE TABLE tesla_products(
	pid INT PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(32),
	subtitle VARCHAR(128),
	price DECIMAL(10,2),
	spec VARCHAR(64),
	pname VARCHAR(32),
	category VARCHAR(32),
	details VARCHAR(1024)
);
#创建产品详情图表
CREATE TABLE tesla_products_pic(
	pid INT PRIMARY KEY AUTO_INCREMENT,
	product_id INT,
	pic VARCHAR(128)
);
#创建首页轮播图表
CREATE TABLE tesla_index_carousel(
	cid INT PRIMARY KEY AUTO_INCREMENT,
	img VARCHAR(128),
	title VARCHAR(64),
	href VARCHAR(128)
);
#创建首页商品表
CREATE TABLE index_product(
	pid INT PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(64),
	details VARCHAR(128),
	pic VARCHAR(128),
	price DECIMAL(10,2),
	href VARCHAR(128)
);