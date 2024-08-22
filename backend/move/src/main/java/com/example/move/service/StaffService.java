package com.example.move.service;

import com.example.move.pojo.Staff;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

/**
* @author liuwe
* @description 针对表【staff(管理员端，公司人员表)】的数据库操作Service
* @createDate 2024-08-21 19:30:29
*/
public interface StaffService extends IService<Staff> {

    List<Staff> staffNameByStaffid(int staffid);

}
