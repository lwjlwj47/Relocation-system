package com.example.move.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.move.pojo.Equipment;
import com.example.move.pojo.EquipmentStage;
import com.example.move.service.EquipmentService;
import com.example.move.mapper.EquipmentMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
* @author 29243
* @description 针对表【equipment(项目设备表)】的数据库操作Service实现
* @createDate 2024-08-12 19:12:58
*/
@Service
public class EquipmentServiceImpl extends ServiceImpl<EquipmentMapper, Equipment>
    implements EquipmentService{

    @Autowired
    private EquipmentMapper equipmentMapper;

    @Override
    public List<Equipment> queryEquipmentByProId(int projectId) {
        return equipmentMapper.queryEquipmentByProId(projectId);
    }

    @Override
    public List<Equipment> queryEquipmentByRoomId(int projectId, int roomId) {
        return equipmentMapper.queryEquipmentByRoomId(projectId, roomId);
    }

    @Override
    public void addEquipment(Equipment equipment) {
        equipmentMapper.addEquipment(equipment);
    }

    @Override
    public void updateStage(EquipmentStage equipmentStage) {
        equipmentMapper.updateStage(equipmentStage);
    }
}




