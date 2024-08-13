package com.example.move.service;

import com.example.move.pojo.User;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

/**
* @author 29243
* @description 针对表【user(用户表)】的数据库操作Service
* @createDate 2024-08-12 16:35:36
*/
public interface UserService extends IService<User> {

    List<User> findAll();
}
