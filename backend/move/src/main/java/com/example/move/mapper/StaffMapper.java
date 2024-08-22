package com.example.move.mapper;

import com.example.move.pojo.Staff;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
* @author liuwe
* @description 针对表【staff(管理员端，公司人员表)】的数据库操作Mapper
* @createDate 2024-08-21 19:30:29
* @Entity com.example.move.pojo.Staff
*/
@Mapper
public interface StaffMapper extends BaseMapper<Staff> {

    List<Staff> staffNameByStaffid(int staffid);

}




