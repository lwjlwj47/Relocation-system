package com.example.move.mapper;

import com.example.move.pojo.Equipment;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
* @author 29243
* @description 针对表【equipment(项目设备表)】的数据库操作Mapper
* @createDate 2024-08-12 19:12:58
* @Entity com.example.move.pojo.Equipment
*/
@Mapper
public interface EquipmentMapper extends BaseMapper<Equipment> {

    List<Equipment> queryEquipmentByProId(int projectId);

    List<Equipment> queryEquipmentByRoomId(int projectId, int roomId);

}




