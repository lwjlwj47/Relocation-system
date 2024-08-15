package com.example.move.controller;

import com.example.move.pojo.Equipment;
import com.example.move.pojo.EquipmentStage;
import com.example.move.pojo.Result;
import com.example.move.service.EquipmentService;
import com.example.move.service.EquipmentStageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/equipment")
public class EquipmentStageController {

    @Autowired
    private EquipmentStageService equipmentStageService;

    @Autowired
    private EquipmentService equipmentService;

    @GetMapping("queryStageByEquipmentId")
    public Result queryStageByEquipmentId(@RequestParam Integer equipmentId) {
        List<EquipmentStage> equipmentStageList = equipmentStageService.queryStageByEquipmentId(equipmentId);
        return Result.success(equipmentStageList);
    }

    @PostMapping("/updateEquipmentStage")
    public Result updateEquipmentStage(@RequestBody EquipmentStage equipmentStage) {
        equipmentService.updateStage(equipmentStage);
        equipmentStageService.insertEquipmentStage(equipmentStage);
        return Result.success("设备工序修改成功");
    }
}
