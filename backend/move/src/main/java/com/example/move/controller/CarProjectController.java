package com.example.move.controller;

import com.example.move.pojo.*;
import com.example.move.service.CarMoveService;
import com.example.move.service.CarProjectService;
import com.example.move.service.StaffService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/car")
public class CarProjectController {
    @Autowired
    private CarProjectService carProjectService;

    @Autowired
    private CarMoveService carMoveService;

    @Autowired
    private StaffService staffService;

    @GetMapping("/queryCarByProId")
    public Result queryCarByProId(@RequestParam Integer proId) {
        List<CarProject> carProjectList = carProjectService.queryCarByProId(proId);
        int n = carProjectList.size();
        List<CarProjectMove> carProjectMove = new ArrayList<CarProjectMove>(n);
        List<CarMove> carMoveList;
        String name;
        for (int i=0;i<carProjectList.size();i++)
        {
            System.out.println(carProjectList);
            carMoveList = carMoveService.queryCarByCarId(carProjectList.get(i).getCarId());
            System.out.println(carMoveList.get(0));
            CarProjectMove carProjectMove1 = new CarProjectMove();
            Staff staff = staffService.staffNameByStaffid(carProjectList.get(i).getCarPersonalId()).get(0);
            System.out.println(staff);
            carProjectMove1.setCarId(carMoveList.get(0).getCarId());
            carProjectMove1.setCarName(carMoveList.get(0).getCarName());
            carProjectMove1.setCarImage(carMoveList.get(0).getCarImage());
            carProjectMove1.setCarNumber(carMoveList.get(0).getCarNumber());
            carProjectMove1.setCarEndTime(carProjectList.get(i).getCarEndTime());
            carProjectMove1.setCarStartTime(carProjectList.get(i).getCarStartTime());
            carProjectMove1.setName(staff.getStaffName());
            carProjectMove.add(carProjectMove1);
        }
        return Result.success(carProjectMove);
    }
}
