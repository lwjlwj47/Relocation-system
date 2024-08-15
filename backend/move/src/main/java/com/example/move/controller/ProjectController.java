package com.example.move.controller;

import com.example.move.pojo.Project;
import com.example.move.pojo.Result;
import com.example.move.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/project")
public class ProjectController {

    @Autowired
    private ProjectService projectService;

    @GetMapping("/queryProjectInfo")
    public Result queryProject() {
        List<Project> projectList = projectService.queryAllProject();
        return Result.success(projectList);
    }

    @GetMapping("/queryProjectByUnit")
    public Result queryProjectByUnit(@RequestParam(required = false) String projectUnit) {
        if (projectUnit != null && !projectUnit.isEmpty()) {
            List<Project> projectList = projectService.queryProjectsByUnit(projectUnit);
            return Result.success(projectList);
        } else {
            List<Project> projectList = projectService.queryAllProject();
            return Result.success(projectList);
        }
    }

    @GetMapping("/queryProjectById")
    public Result getProjects(@RequestParam(required = false) Integer projectId) {
        List<Project> projectList = projectService.queryProjectById(projectId);
        return Result.success(projectList);

    }

    @PostMapping("/addProject")
    public Result addProject(@RequestBody Project project) {
        try {
            projectService.addProject(project);
            return Result.success("项目添加成功");
        } catch (Exception e) {
            return Result.error("项目添加失败：" + e.getMessage());
        }
    }

}
