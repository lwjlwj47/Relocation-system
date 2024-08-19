package com.example.move.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.move.pojo.Room;
import com.example.move.service.RoomService;
import com.example.move.mapper.RoomMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
* @author 29243
* @description 针对表【room(项目房间表)】的数据库操作Service实现
* @createDate 2024-08-12 17:34:05
*/
@Service
public class RoomServiceImpl extends ServiceImpl<RoomMapper, Room>
    implements RoomService{

    @Autowired
    private RoomMapper roomMapper;

    @Override
    public List<Room> queryRoomByProjectId(int projectId) {
        return roomMapper.queryRoomByProjectId(projectId);
    }

    @Override
    public void addRoom(int projectId, String roomId, int personalId) {
        roomMapper.addRoom(projectId, roomId,personalId);
    }

}




