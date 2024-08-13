package com.example.move;

import com.example.move.mapper.UserMapper;
import com.example.move.pojo.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
class MoveApplicationTests {

    @Test
    void contextLoads() {
    }

    @Autowired
    private UserMapper userMapper;

    @Test
    public void testListUser(){
        List<User> userList =userMapper.findAll();
        for (User user : userList) {
            System.out.println(user);
        }
    }
}
