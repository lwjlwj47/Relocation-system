package com.example.move.service;

import com.example.move.pojo.Equipment;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

/**
* @author 29243
* @description 针对表【equipment(项目设备表)】的数据库操作Service
* @createDate 2024-08-12 19:12:58
*/
public interface EquipmentService extends IService<Equipment> {

    List<Equipment> queryEquipmentByProId(int projectId);

    List<Equipment> queryEquipmentByRoomId(int projectId, int roomId);
}
