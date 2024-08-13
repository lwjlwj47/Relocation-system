package com.example.move.service;

import com.example.move.pojo.CarProject;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

/**
* @author 29243
* @description 针对表【car_project(一个项目中使用的车辆表)】的数据库操作Service
* @createDate 2024-08-13 13:17:52
*/
public interface CarProjectService extends IService<CarProject> {

    List<CarProject> queryCarByProId(Integer proId);
}
