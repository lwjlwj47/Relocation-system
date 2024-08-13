package com.example.move.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.move.mapper.UserMapper;
import com.example.move.pojo.Project;
import com.example.move.service.ProjectService;
import com.example.move.mapper.ProjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
* @author 29243
* @description 针对表【project(项目表)】的数据库操作Service实现
* @createDate 2024-08-11 13:25:29
*/
@Service
public class ProjectServiceImpl extends ServiceImpl<ProjectMapper, Project>
    implements ProjectService{

    @Autowired
    private ProjectMapper projectMapper;

    @Override
    public List<Project> queryAllProject() {
        return projectMapper.queryAllProject();
    }

    @Override
    public List<Project> queryProjectsByUnit(String projectUnit) {
        return projectMapper.queryProjectsByUnit(projectUnit);
    }

    @Override
    public List<Project> queryProjectById(Integer projectId) {
        return projectMapper.queryProjectsById(projectId);
    }


}




