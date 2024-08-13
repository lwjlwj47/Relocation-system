package com.example.move.mapper;

import com.example.move.pojo.CarMove;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
* @author 29243
* @description 针对表【car_move(运输车辆表（公司的所有车辆信息）)】的数据库操作Mapper
* @createDate 2024-08-13 13:17:46
* @Entity com.example.move.pojo.CarMove
*/
@Mapper
public interface CarMoveMapper extends BaseMapper<CarMove> {

    List<CarMove> queryCarByCarId(int proId);
}




