package com.example.move.mapper;

import com.example.move.pojo.EquipmentStage;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
* @author 29243
* @description 针对表【equipment_stage(设备工序表（项目房间里面有设备，一个设备里面有多道工序）)】的数据库操作Mapper
* @createDate 2024-08-14 23:55:07
* @Entity com.example.move.pojo.EquipmentStage
*/
@Mapper
public interface EquipmentStageMapper extends BaseMapper<EquipmentStage> {

    void insertEquipmentStage(EquipmentStage equipmentStage);

    List<EquipmentStage> queryStageByEquipmentId(Integer equipmentId);
}




