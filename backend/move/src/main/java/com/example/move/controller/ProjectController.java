package com.example.move.controller;

import com.example.move.pojo.Project;
import com.example.move.pojo.Result;
import com.example.move.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/project")
public class ProjectController {

    @Autowired
    private ProjectService projectServiceImpl;

    @GetMapping("/queryProjectInfo")
    public Result queryProject() {
        List<Project> projectList = projectServiceImpl.queryAllProject();
        return Result.success(projectList);
    }

    @GetMapping("/queryProjectByUnit")
    public Result queryProjectByUnit(@RequestParam(required = false) String projectUnit) {
        if (projectUnit != null && !projectUnit.isEmpty()) {
            List<Project> projectList = projectServiceImpl.queryProjectsByUnit(projectUnit);
            return Result.success(projectList);
        } else {
            List<Project> projectList = projectServiceImpl.queryAllProject();
            return Result.success(projectList);
        }
    }

    @GetMapping("/queryProjectById")
    public Result getProjects(@RequestParam(required = false) Integer projectId) {
        List<Project> projectList = projectServiceImpl.queryProjectById(projectId);
        return Result.success(projectList);

    }

}
