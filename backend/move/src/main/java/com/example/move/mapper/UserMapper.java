package com.example.move.mapper;

import com.example.move.pojo.User;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
* @author 29243
* @description 针对表【user(用户表)】的数据库操作Mapper
* @createDate 2024-08-12 16:35:36
* @Entity com.example.move.pojo.User
*/
@Mapper
public interface UserMapper extends BaseMapper<User> {

    List<User> findAll();
}




