package com.example.move.mapper;

import com.example.move.pojo.Project;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
* @author 29243
* @description 针对表【project(项目表)】的数据库操作Mapper
* @createDate 2024-08-11 13:25:29
* @Entity com.example.move.pojo.Project
*/
@Mapper
public interface ProjectMapper extends BaseMapper<Project> {

    List<Project> queryAllProject();
    List<Project> findAllProjects();

//    @Select("select * from project where project_unit = #{projectUnit}")
    List<Project> queryProjectsByUnit(String projectUnit);

    List<Project> queryProjectsById(Integer projectId);

    void addProject(Project project);
}




