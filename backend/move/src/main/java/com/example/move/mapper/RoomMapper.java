package com.example.move.mapper;

import com.example.move.pojo.Room;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
* @author 29243
* @description 针对表【room(项目房间表)】的数据库操作Mapper
* @createDate 2024-08-12 17:34:05
* @Entity com.example.move.pojo.Room
*/
@Mapper
public interface RoomMapper extends BaseMapper<Room> {

    List<Room> queryRoomByProjectId(int projectId);

    void addRoom(int projectId, String roomId, int personalId);
}




