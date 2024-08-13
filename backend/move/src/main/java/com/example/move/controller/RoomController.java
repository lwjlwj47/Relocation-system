package com.example.move.controller;

import com.example.move.pojo.Result;
import com.example.move.pojo.Room;
import com.example.move.service.impl.RoomServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/room")
public class RoomController {

    @Autowired
    private RoomServiceImpl roomService;

    @GetMapping("/queryRoomByProjectId")
    public Result queryRoomByProjectId(@RequestParam int projectId) {
        List<Room> roomList =  roomService.queryRoomByProjectId(projectId);
        return Result.success(roomList);
    }

}
