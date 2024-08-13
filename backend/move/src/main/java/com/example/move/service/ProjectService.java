package com.example.move.service;

import com.example.move.pojo.Project;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

/**
* @author 29243
* @description 针对表【project(项目表)】的数据库操作Service
* @createDate 2024-08-11 13:25:29
*/
public interface ProjectService extends IService<Project> {

    List<Project> queryAllProject();

    List<Project> queryProjectsByUnit(String projectUnit);

    List<Project> queryProjectById(Integer projectId);
}
