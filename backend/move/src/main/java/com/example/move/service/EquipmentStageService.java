package com.example.move.service;

import com.example.move.pojo.EquipmentStage;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

/**
* @author 29243
* @description 针对表【equipment_stage(设备工序表（项目房间里面有设备，一个设备里面有多道工序）)】的数据库操作Service
* @createDate 2024-08-14 23:55:07
*/
public interface EquipmentStageService extends IService<EquipmentStage> {

    void insertEquipmentStage(EquipmentStage equipmentStage);

    List<EquipmentStage> queryStageByEquipmentId(Integer equipmentId);
}
