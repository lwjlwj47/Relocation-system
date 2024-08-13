package com.example.move.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.move.pojo.CarProject;
import com.example.move.service.CarProjectService;
import com.example.move.mapper.CarProjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
* @author 29243
* @description 针对表【car_project(一个项目中使用的车辆表)】的数据库操作Service实现
* @createDate 2024-08-13 13:17:52
*/
@Service
public class CarProjectServiceImpl extends ServiceImpl<CarProjectMapper, CarProject>
    implements CarProjectService{

    @Autowired
    private CarProjectMapper carProjectMapper;

    @Override
    public List<CarProject> queryCarByProId(Integer proId) {
        return carProjectMapper.queryCarByProId(proId);
    }
}




