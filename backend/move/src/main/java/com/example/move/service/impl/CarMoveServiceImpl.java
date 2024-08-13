package com.example.move.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.move.pojo.CarMove;
import com.example.move.service.CarMoveService;
import com.example.move.mapper.CarMoveMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
* @author 29243
* @description 针对表【car_move(运输车辆表（公司的所有车辆信息）)】的数据库操作Service实现
* @createDate 2024-08-13 13:17:46
*/
@Service
public class CarMoveServiceImpl extends ServiceImpl<CarMoveMapper, CarMove>
    implements CarMoveService{

    @Autowired
    private CarMoveMapper carMoveMapper;

    @Override
    public List<CarMove> queryCarByCarId(int proId) {
        return carMoveMapper.queryCarByCarId(proId);
    }
}




