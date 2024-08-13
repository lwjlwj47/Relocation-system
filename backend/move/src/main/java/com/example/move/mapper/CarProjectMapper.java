package com.example.move.mapper;

import com.example.move.pojo.CarProject;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
* @author 29243
* @description 针对表【car_project(一个项目中使用的车辆表)】的数据库操作Mapper
* @createDate 2024-08-13 13:17:52
* @Entity com.example.move.pojo.CarProject
*/
@Mapper
public interface CarProjectMapper extends BaseMapper<CarProject> {

    List<CarProject> queryCarByProId(Integer proId);
}




