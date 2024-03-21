DROP TABLE IF EXISTS `member`;

CREATE TABLE `member` (
	`member_no`	INT	PRIMARY KEY AUTO_INCREMENT,
	`email`	VARCHAR(30)	NOT NULL,
	`name`	VARCHAR(5)	NOT NULL,
	`nickname`	VARCHAR(10)	NOT NULL,
	`created_at`	DATETIME	NOT NULL,
	`image_url`	VARCHAR(255)	NULL,
	`provider`	VARCHAR(10)	NOT NULL,
	`sns_key`	VARCHAR(255)	NOT NULL
);

DROP TABLE IF EXISTS `review`;

CREATE TABLE `review` (
	`review_no`	INT PRIMARY KEY AUTO_INCREMENT,
	`funding_no`	INT	NOT NULL,
	`title`	VARCHAR(30)	NOT NULL,
	`content`	TEXT	NOT NULL,
	`create_at`	DATETIME	NOT NULL
);

DROP TABLE IF EXISTS `point_ recharge`;

CREATE TABLE `point_ recharge` (
	`point_no`	INT	PRIMARY KEY AUTO_INCREMENT,
	`member_no`	INT	NOT NULL,
	`amount`	INT	NOT NULL,
	`created_at`	DATETIME	NOT NULL,
	`content`	VARCHAR(20)	NOT NULL,
	`payment_type`	VARCHAR(10)	NOT NULL
);

DROP TABLE IF EXISTS `file`;

CREATE TABLE `file` (
	`file_no`	INT	PRIMARY KEY AUTO_INCREMENT,
	`url`	VARCHAR(255)	NOT NULL
);

DROP TABLE IF EXISTS `funding`;

CREATE TABLE `funding` (
	`funding_no`	INT	PRIMARY KEY AUTO_INCREMENT,
	`issue_number`	VARCHAR(100)	NOT NULL,
	`registration_number`	VARCHAR(100)	NOT NULL,
	`patient_name`	VARCHAR(20)	NOT NULL,
	`status`	VARCHAR(5)	NOT NULL,
	`birth`	DATE	NOT NULL,
	`gender`	CHAR(1)	NOT NULL,
	`disease_name`	VARCHAR(30)	NOT NULL,
	`disease_code`	VARCHAR(100)	NOT NULL,
	`diagnosis_date`	DATE	NOT NULL,
	`opinion`	TEXT	NOT NULL,
	`title`	VARCHAR(30)	NOT NULL,
	`start_date`	DATE	NOT NULL,
	`end_date`	DATE	NOT NULL,
	`total_amount`	INT	NOT NULL,
	`target_amount`	INT	NOT NULL,
	`created_at`	DATE	NOT NULL,
	`phone`	VARCHAR(11)	NOT NULL
);

DROP TABLE IF EXISTS `funding_detail`;

CREATE TABLE `funding_detail` (
	`funding_no`	INT	PRIMARY KEY,
	`content`	TEXT	NULL,
	`thumbnail_url`	VARCHAR(255)	NOT NULL
);

DROP TABLE IF EXISTS `review_file`;

CREATE TABLE `review_file` (
	`review_file_no`	INT	PRIMARY KEY AUTO_INCREMENT,
	`review_no`	INT	NOT NULL,
	`file_no`	INT	NOT NULL
);

DROP TABLE IF EXISTS `admin`;

CREATE TABLE `admin` (
	`admin_no`	INT	PRIMARY KEY AUTO_INCREMENT,
	`id`	VARCHAR(20)	NOT NULL,
	`password`	VARCHAR(255)	NOT NULL,
	`name`	VARCHAR(30)	NOT NULL,
	`created_at`	DATETIME	NOT NULL
);

DROP TABLE IF EXISTS `member-funding`;

CREATE TABLE `member-funding` (
	`member_funding_no`	INT	PRIMARY KEY AUTO_INCREMENT,
	`member_no`	INT	NOT NULL,
	`funding_no`	INT	NOT NULL,
	`payment_no`	INT	NULL,
	`point_no`	INT	NULL,
	`create_at`	DATETIME	NOT NULL,
	`amount`	INT	NOT NULL,
	`is_public`	TINYINT(1)	NOT NULL
);

DROP TABLE IF EXISTS `admin-funding`;

CREATE TABLE `admin-funding` (
	`admin_funding_no`	INT	PRIMARY KEY AUTO_INCREMENT,
	`admin_no`	INT	NOT NULL,
	`funding_no`	INT	NOT NULL
);

DROP TABLE IF EXISTS `regular_payment`;

CREATE TABLE `regular_payment` (
	`regular_payment_no`	INT	PRIMARY KEY AUTO_INCREMENT,
	`member_no`	INT	NOT NULL,
	`created_at`	DATETIME	NOT NULL,
	`method`	VARCHAR(20)	NOT NULL,
	`amount`	INT	NOT NULL
);

DROP TABLE IF EXISTS `payment`;

CREATE TABLE `payment` (
	`payment_no`	INT	PRIMARY KEY AUTO_INCREMENT,
	`created_at`	DATETIME	NOT NULL,
	`method`	VARCHAR(20)	NOT NULL,
	`amount`	INT	NOT NULL
);

DROP TABLE IF EXISTS `point_usage`;

CREATE TABLE `point_usage` (
	`point_no`	INT	PRIMARY KEY AUTO_INCREMENT,
	`member_no`	INT	NOT NULL,
	`amount`	INT	NOT NULL,
	`created_at`	DATETIME	NOT NULL
);

DROP TABLE IF EXISTS `usage_history`;

CREATE TABLE `usage_history` (
	`usage_history_no`	INT	PRIMARY KEY AUTO_INCREMENT,
	`admin_funding_no`	INT	NOT NULL,
	`category`	VARCHAR(50)	NOT NULL,
	`content`	VARCHAR(255)	NOT NULL,
	`amount`	INT	NOT NULL,
	`count`	INT	NOT NULL
);

DROP TABLE IF EXISTS `notification`;

CREATE TABLE `notification` (
	`notification_no`	INT	PRIMARY KEY AUTO_INCREMENT,
	`member_no`	INT	NOT NULL,
	`category`	VARCHAR(10)	NOT NULL,
	`content`	VARCHAR(30)	NOT NULL,
	`detail`	VARCHAR(30)	NOT NULL,
	`created_at`	DATETIME	NOT NULL,
	`is_read`	TINYINT(1)	NOT NULL DEFAULT FALSE
);

DROP TABLE IF EXISTS `member_device`;

CREATE TABLE `member_device` (
	`member_device_no`	INT	PRIMARY KEY AUTO_INCREMENT,
	`member_no`	INT	NOT NULL,
	`device_token`	VARCHAR(255)	NOT NULL,
	`last_login_at`	DATETIME	NOT NULL
);

DROP TABLE IF EXISTS `member_setting`;

CREATE TABLE `member_setting` (
	`member_setting_no`	INT	PRIMARY KEY AUTO_INCREMENT,
    `member_no`	INT	NOT NULL,
	`funding_review`	TINYINT(1)	NOT NULL DEFAULT TRUE,
	`usage_history`	TINYINT(1)	NOT NULL DEFAULT TRUE,
	`regular_payment`	TINYINT(1)	NOT NULL DEFAULT TRUE,
	`recommend_funding`	TINYINT(1)	NOT NULL DEFAULT TRUE
);

DROP TABLE IF EXISTS `payment_token`;

CREATE TABLE `payment_token` (
	`member_no`	INT	PRIMARY KEY,
	`sid`	VARCHAR(255)	NULL,
	`billing_key`	VARCHAR(255)	NULL
);

ALTER TABLE `review` ADD CONSTRAINT `FK_funding_TO_review_1` FOREIGN KEY (
	`funding_no`
)
REFERENCES `funding` (
	`funding_no`
);

select * from funding;

ALTER TABLE `point_ recharge` ADD CONSTRAINT `FK_member_TO_point_ recharge_1` FOREIGN KEY (
	`member_no`
)
REFERENCES `member` (
	`member_no`
);

ALTER TABLE `funding_detail` ADD CONSTRAINT `FK_funding_TO_funding_detail_1` FOREIGN KEY (
	`funding_no`
)
REFERENCES `funding` (
	`funding_no`
);

ALTER TABLE `review_file` ADD CONSTRAINT `FK_review_TO_review_file_1` FOREIGN KEY (
	`review_no`
)
REFERENCES `review` (
	`review_no`
);

ALTER TABLE `review_file` ADD CONSTRAINT `FK_file_TO_review_file_1` FOREIGN KEY (
	`file_no`
)
REFERENCES `file` (
	`file_no`
);

ALTER TABLE `member-funding` ADD CONSTRAINT `FK_member_TO_member-funding_1` FOREIGN KEY (
	`member_no`
)
REFERENCES `member` (
	`member_no`
);

ALTER TABLE `member-funding` ADD CONSTRAINT `FK_funding_TO_member-funding_1` FOREIGN KEY (
	`funding_no`
)
REFERENCES `funding` (
	`funding_no`
);

ALTER TABLE `member-funding` ADD CONSTRAINT `FK_payment_TO_member-funding_1` FOREIGN KEY (
	`payment_no`
)
REFERENCES `payment` (
	`payment_no`
);

ALTER TABLE `member-funding` ADD CONSTRAINT `FK_point_usage_TO_member-funding_1` FOREIGN KEY (
	`point_no`
)
REFERENCES `point_usage` (
	`point_no`
);

ALTER TABLE `admin-funding` ADD CONSTRAINT `FK_admin_TO_admin-funding_1` FOREIGN KEY (
	`admin_no`
)
REFERENCES `admin` (
	`admin_no`
);

ALTER TABLE `admin-funding` ADD CONSTRAINT `FK_funding_TO_admin-funding_1` FOREIGN KEY (
	`funding_no`
)
REFERENCES `funding` (
	`funding_no`
);

ALTER TABLE `regular_payment` ADD CONSTRAINT `FK_member_TO_regular_payment_1` FOREIGN KEY (
	`member_no`
)
REFERENCES `member` (
	`member_no`
);

ALTER TABLE `point_usage` ADD CONSTRAINT `FK_member_TO_point_usage_1` FOREIGN KEY (
	`member_no`
)
REFERENCES `member` (
	`member_no`
);

ALTER TABLE `usage_history` ADD CONSTRAINT `FK_admin-funding_TO_usage_history_1` FOREIGN KEY (
	`admin_funding_no`
)
REFERENCES `admin-funding` (
	`admin_funding_no`
);

ALTER TABLE `notification` ADD CONSTRAINT `FK_member_TO_notification_1` FOREIGN KEY (
	`member_no`
)
REFERENCES `member` (
	`member_no`
);

ALTER TABLE `member_device` ADD CONSTRAINT `FK_member_TO_member_device_1` FOREIGN KEY (
	`member_no`
)
REFERENCES `member` (
	`member_no`
);

ALTER TABLE `member_setting` ADD CONSTRAINT `FK_member_TO_member_setting_1` FOREIGN KEY (
	`member_no`
)
REFERENCES `member` (
	`member_no`
);

ALTER TABLE `payment_token` ADD CONSTRAINT `FK_member_TO_payment_token_1` FOREIGN KEY (
	`member_no`
)
REFERENCES `member` (
	`member_no`
);

