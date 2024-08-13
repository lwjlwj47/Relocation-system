package com.example.move.controller;

import com.example.move.pojo.Result;
import com.example.move.pojo.User;
import com.example.move.service.UserService;
import com.example.move.service.impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    private UserServiceImpl userServiceImpl;

    @GetMapping("/queryUserList")
    public Result list(){
        List<User> userList = userServiceImpl.findAll();
        return Result.success(userList);
    }
}
