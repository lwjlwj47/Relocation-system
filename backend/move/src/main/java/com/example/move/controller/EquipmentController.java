package com.example.move.controller;

import com.example.move.pojo.Equipment;
import com.example.move.pojo.Result;
import com.example.move.service.EquipmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/equipment")
public class EquipmentController {

    @Autowired
    private EquipmentService equipmentService;

    @GetMapping("/queryEquipmentByProId")
    public Result queryEquipmentByProId(@RequestParam int projectId) {
        List<Equipment>equipmentList =  equipmentService.queryEquipmentByProId(projectId);
        return Result.success(equipmentList);
    }

    @GetMapping("queryEquipmentByRoomId")
    public Result queryEquipmentByRoomId(@RequestParam int projectId, @RequestParam int roomId) {
        List<Equipment>equipmentList =  equipmentService.queryEquipmentByRoomId(projectId, roomId);
        return Result.success(equipmentList);
    }


}
