package com.example.move.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.move.pojo.Staff;
import com.example.move.service.StaffService;
import com.example.move.mapper.StaffMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
* @author liuwe
* @description 针对表【staff(管理员端，公司人员表)】的数据库操作Service实现
* @createDate 2024-08-21 19:30:29
*/
@Service
public class StaffServiceImpl extends ServiceImpl<StaffMapper, Staff>
    implements StaffService{

    @Autowired
    private StaffMapper staffMapper;
    @Override
    public List<Staff> staffNameByStaffid(int staffid) {
        return staffMapper.staffNameByStaffid(staffid);
    }
}




