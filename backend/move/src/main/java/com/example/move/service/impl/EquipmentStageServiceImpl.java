package com.example.move.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.move.pojo.EquipmentStage;
import com.example.move.service.EquipmentStageService;
import com.example.move.mapper.EquipmentStageMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
* @author 29243
* @description 针对表【equipment_stage(设备工序表（项目房间里面有设备，一个设备里面有多道工序）)】的数据库操作Service实现
* @createDate 2024-08-14 23:55:07
*/
@Service
public class EquipmentStageServiceImpl extends ServiceImpl<EquipmentStageMapper, EquipmentStage>
    implements EquipmentStageService{

    @Autowired
    EquipmentStageMapper equipmentStageMapper;

    @Override
    public void insertEquipmentStage(EquipmentStage equipmentStage) {
        equipmentStageMapper.insertEquipmentStage(equipmentStage);
    }

    @Override
    public List<EquipmentStage> queryStageByEquipmentId(Integer equipmentId) {
        return equipmentStageMapper.queryStageByEquipmentId(equipmentId);
    }
}




