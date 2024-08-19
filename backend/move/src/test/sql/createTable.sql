create table car_move
(
    car_id     int auto_increment comment '汽车id'
        primary key,
    car_image  longblob     null comment '车辆头像',
    car_name   varchar(255) null comment '车辆名称',
    car_number varchar(20)  null comment '车牌号'
)
    comment '运输车辆表（公司的所有车辆信息）';

create table car_project
(
    car_id          int  not null comment '车辆id'
        primary key,
    project_id      int  null comment '项目id',
    car_start_time  date null comment '车辆使用起始时间',
    car_end_time    date null comment '车辆使用截止时间',
    car_personal_id int  null comment '车辆负责人id'
)
    comment '一个项目中使用的车辆表';

create table equipment
(
    equipment_id      int auto_increment comment '设备id'
        primary key,
    project_id        int          null comment '项目id（该设备所对应的项目）',
    equipment_name    varchar(255) null comment '设备名称',
    room_id           varchar(30)  null comment '房间id（该设备对应使用项目中具体房间）',
    equipment_remark  varchar(255) null comment '设备备注',
    equipment_rank    varchar(255) null comment '设备等级',
    equipment_image   varchar(255) null comment '设备头像',
    equipment_process int          null comment '设备当前的处理环节（1,2,3...）'
)
    comment '项目设备表';

create table equipment_stage
(
    id           int auto_increment comment '主键id',
    equipment_id int null comment '设备对应的id',
    stage        int null comment '设备包含的工序',
    constraint equipment_stage_pk
        primary key (id)
)
    comment '设备工序表（项目房间里面有设备，一个设备里面有多道工序）';

create table personnel
(
    personnel_id    int auto_increment comment '个人信息主键'
        primary key,
    personnel_image varchar(255) null comment '个人头像',
    personnel_phone varchar(11)  null comment '个人电话号码',
    personnel_name  varchar(255) null comment '个人昵称',
    personnel_owner varchar(1)   null comment '个人归属（0：甲方（游客），1：员工）'
)
    comment '甲方人员表';

create table project
(
    project_id            int unsigned auto_increment comment '项目id'
        primary key,
    project_grade         int unsigned not null comment '项目等级',
    project_name          varchar(255) not null comment '项目名称',
    project_first_person  varchar(255) not null comment '项目甲方负责人',
    project_second_person varchar(255) not null comment '项目乙方负责人',
    project_start_time    date         not null comment '开始时间',
    project_end_time      date         null comment '结束时间',
    project_remark        varchar(255) not null comment '项目备注',
    project_is_done       int unsigned not null comment '项目结束标志',
    project_unit          varchar(30)  not null comment '项目所属单位',
    project_unit_type     varchar(1)   null comment '1为高校，2为企事业单位'
)
    comment '项目表';

create table room
(
    id          int auto_increment comment '项目房间信息主键'
        primary key,
    room_id     varchar(30) null comment '房间id',
    project_id  int         null comment '项目id',
    personal_id int         null comment '负责人id'
)
    comment '项目房间表';

create table staff
(
    staff_id         int auto_increment comment '职工id'
        primary key,
    staff_type       varchar(30)  not null comment '职工类型',
    staff_name       varchar(20)  null comment '职工姓名',
    staff_id_no      varchar(20)  null comment '职工身份证',
    `staff_phone-no` varchar(11)  null comment '职工手机号',
    staff_wechat_no  varchar(255) null comment '职工微信号',
    staff_pos        varchar(30)  null comment '职工职位',
    staff_status     varchar(1)   null comment '职工状态(0:离职，1：正常)'
)
    comment '管理员端，公司人员表';
