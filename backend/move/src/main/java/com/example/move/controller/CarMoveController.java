package com.example.move.controller;

import com.example.move.pojo.CarMove;
import com.example.move.pojo.Result;
import com.example.move.service.CarMoveService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/car")
public class CarMoveController {

    @Autowired
    private CarMoveService carMoveService;

    @GetMapping("/queryCarInfoByCarId")
    public Result queryCarByCarId(@RequestParam int carId) {
        List<CarMove> carMoveList = carMoveService.queryCarByCarId(carId);
        return Result.success(carMoveList);
    }
}
