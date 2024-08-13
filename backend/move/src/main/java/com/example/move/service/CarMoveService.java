package com.example.move.service;

import com.example.move.pojo.CarMove;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

/**
* @author 29243
* @description 针对表【car_move(运输车辆表（公司的所有车辆信息）)】的数据库操作Service
* @createDate 2024-08-13 13:17:46
*/
public interface CarMoveService extends IService<CarMove> {

    List<CarMove> queryCarByCarId(int proId);
}
