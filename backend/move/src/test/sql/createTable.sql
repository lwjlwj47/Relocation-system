create table equipment_stage
(
    id           int auto_increment comment '主键id',
    equipment_id int null comment '设备对应的id',
    stage        int null comment '设备包含的工序',
    constraint equipment_stage_pk
        primary key (id)
)
    comment '设备工序表（项目房间里面有设备，一个设备里面有多道工序）';

