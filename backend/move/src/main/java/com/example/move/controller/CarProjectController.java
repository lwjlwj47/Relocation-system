package com.example.move.controller;

import com.example.move.pojo.CarProject;
import com.example.move.pojo.Result;
import com.example.move.service.CarProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/car")
public class CarProjectController {
    @Autowired
    private CarProjectService carProjectService;

    @GetMapping("/queryCarByProId")
    public Result queryCarByProId(@RequestParam Integer proId) {
        List<CarProject> carProjectList = carProjectService.queryCarByProId(proId);
        return Result.success(carProjectList);
    }
}
