package com.example.move.service;

import com.example.move.pojo.Room;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

/**
* @author 29243
* @description 针对表【room(项目房间表)】的数据库操作Service
* @createDate 2024-08-12 17:34:05
*/
public interface RoomService extends IService<Room> {

    List<Room> queryRoomByProjectId(int projectId);

    void addRoom(int projectId, int roomId, int personalId);
}
