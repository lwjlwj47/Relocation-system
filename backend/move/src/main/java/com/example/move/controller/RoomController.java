package com.example.move.controller;

import com.example.move.pojo.Equipment;
import com.example.move.pojo.Result;
import com.example.move.pojo.Room;
import com.example.move.service.EquipmentService;
import com.example.move.service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/room")
public class RoomController {

    @Autowired
    private RoomService roomService;

    @Autowired
    private EquipmentService equipmentService;

    @GetMapping("/queryRoomByProjectId")
    public Result queryRoomByProjectId(@RequestParam int projectId) {
        List<Room> roomList =  roomService.queryRoomByProjectId(projectId);
        return Result.success(roomList);
    }

    @PostMapping("/addRoomByProjectId")
    public Result addRoomByProjectId(@RequestParam int personalId, @RequestBody Equipment equipment) {

        int projectId = equipment.getProjectId();
        int roomId = equipment.getRoomId();
        roomService.addRoom(projectId, roomId, personalId);
        equipmentService.addEquipment(equipment);
        return Result.success("房间新增成功");
    }

}
